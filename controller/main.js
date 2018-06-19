const Helper = require('../util/helper');
const Response = require('../util/reponse');


class Main {
  constructor(service) {
    this.service = service;
  }

  getTodayMatchInfo(todayStartDate = Helper.getTodayStartDate()) {
    let todayMatches;
    let messageHeader = Helper.createDateSubMenu(todayStartDate) + ' 경기 일정\n';
    let messageBody;

    const todayLastDate = Helper.getTodayLastDate(todayStartDate);
    if (!this.service.tournament.isFinish(todayStartDate)) {
      todayMatches = this.service.tournament.getFromStartToEndDate(todayStartDate, todayLastDate);
    }

    if (todayMatches && todayMatches.length !== 0) {
      const todayDate = Helper.getTodayDate();
      const todayDateHour = todayDate.getHours();

      messageBody = todayMatches.map(todayMatch => {
        const rawMatchHour = todayMatch.date.getHours();
        const matchHour = rawMatchHour < 10 ? `0${rawMatchHour}` : rawMatchHour;
        const [nation1, nation2] = todayMatch.nations;
        const group = todayMatch.group;
        const score = todayMatch.score;

        let message;
        if (score) {
          message = `${matchHour}시 ${group}조 ${nation1}(${score[0]}) vs ${nation2}(${score[1]})`;
        } else {
          const isPastMatchHour = todayDateHour >= matchHour;
          const isDuringGame = (matchHour - todayDateHour) >= 0 && (matchHour - todayDateHour) < 2;
          if (isPastMatchHour && isDuringGame) {
            message = `${matchHour}시 ${group}조 ${nation1} vs ${nation2} (경기중)`;
          } else {
            message = `${matchHour}시 ${group}조 ${nation1} vs ${nation2}`;
          }
        }

        return message;
      }).join('\n');
    } else {
      messageBody = '경기 일정이 없습니다.';
    }

    return Response.send(messageHeader + messageBody, Helper.mainMenuNames);
  }

  getMatchInfoBySubMenuDate(subMenuDate) {
    const [month, day] = subMenuDate.split(' ');
    const date = `2018-${month.substr(0, 2)}-${day.substr(0, 2)}`;
    const fromDate = new Date(`${date} 00:00:00`);
    const toDate = new Date(fromDate);
    toDate.setDate(fromDate.getDate() + 1);

    const matches = this.service.tournament.getFromStartToEndDate(fromDate, toDate);
    if (matches.length === 0) throw new Error('no match info');

    const results = matches.map(match => {
      const rawHour = match.date.getHours();
      const hour = rawHour < 10 ? `0${rawHour}` : rawHour;
      const [nation1, nation2] = match.nations;
      const group = match.group;
      const score = match.score;

      return score
        ? `${hour}시 ${group}조 ${nation1}(${score[0]}) vs ${nation2}(${score[1]})`
        : `${hour}시 ${group}조 ${nation1} vs ${nation2}`
    });

    return Response.send(results.join('\n'), Helper.mainMenuNames);
  }

  getSubMenus() {
    const menus = [].concat(Helper.subMenuNamesInMatchTables).concat(Helper.defaultMenuNames);
    return Response.send('요일별 / 그룹별 선택해주세요', menus);
  }

  getDefaultMenus() {
    return Response.send('원하시는 정보를 선택해 주세요.', Helper.mainMenuNames);
  }

  getLastMatchDates(todayLastDate = Helper.getTodayLastDate()) {
    let results;

    const firstTournamentDate = this.service.tournament.getFirstDate();
    const lastMatches = this.service.tournament.getFromStartToEndDate(firstTournamentDate, todayLastDate);

    if (lastMatches && lastMatches.length !== 0) {
      results = lastMatches
        .filter(({score}) => score !== null)
        .map(lastMatch => Helper.createDateSubMenu(lastMatch.date))
    }

    if (results) return Response.send('경기 날짜를 선택해주세요', [...new Set(results), Helper.defaultMenuNames[0]]);
    else return Response.send('지난 경기가 존재하지 않습니다.', Helper.mainMenuNames);
  }
}


module.exports = Main;
