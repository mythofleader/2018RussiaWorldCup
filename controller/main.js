const Helper = require('../util/helper');
const Response = require('../util/reponse');


class Main {
  constructor(service) {
    this.service = service;
  }

  getTodayMatchInfo(todayDate = Helper.getLocalDate()) {
    let todayMatches;
    let messageHeader = Helper.createDateSubMenu(todayDate) + ' 경기 일정\n';
    let messageBody;

    const tomorrowDate = Helper.getTomorrowDate(todayDate);
    if (!this.service.tournament.isFinish(todayDate)) {
      todayMatches = this.service.tournament.getFromStartToEndDate(todayDate, tomorrowDate);
    }

    if (todayMatches && todayMatches.length !== 0) {
      messageBody = todayMatches.map(todayMatch => {
        const rawMatchHour = todayMatch.date.getHours();
        const matchHour = rawMatchHour < 10 ? `0${rawMatchHour}` : rawMatchHour;
        const [nation1, nation2] = todayMatch.nations;
        const group = todayMatch.group;
        const score = todayMatch.score;

        return score
          ? `${matchHour}시 ${group}조 ${nation1}(${score[0]}) vs ${nation2}(${score[1]})`
          : `${matchHour}시 ${group}조 ${nation1} vs ${nation2}`
      }).join('\n');
    } else {
      messageBody = '경기 일정이 없습니다.';
    }

    return Response.send(messageHeader + messageBody, Helper.mainMenuNames);
  }

  getLastMatchInfo(tomorrowStartDate = Helper.getTomorrowDate()) {
    let messageBody;

    const firstTournamentDate = this.service.tournament.getFirstDate();
    const lastMatches = this.service.tournament.getFromStartToEndDate(firstTournamentDate, tomorrowStartDate);

    if (lastMatches && lastMatches.length !== 0) {
      const results = lastMatches
        .filter(({ score }) => score !== null)
        .map(lastMatch => {
          const messageHeader = Helper.createDateSubMenu(lastMatch.date) + ' 경기 일정';
          const rawMatchHour = lastMatch.date.getHours();
          const matchHour = rawMatchHour < 10 ? `0${rawMatchHour}` : rawMatchHour;
          const [nation1, nation2] = lastMatch.nations;
          const group = lastMatch.group;
          const score = lastMatch.score;

          const messageBody = score
            ? `${matchHour}시 ${group}조 ${nation1}(${score[0]}) vs ${nation2}(${score[1]})`
            : `${matchHour}시 ${group}조 ${nation1} vs ${nation2}`;

          return { messageHeader, messageBody };
        })
        .reduce((obj, { messageHeader, messageBody }) => {
          if (obj.hasOwnProperty(messageHeader)) obj[messageHeader].push(messageBody);
          else obj[messageHeader] = [messageBody];

          return obj;
        }, {});

      const final = [];
      for (const key of Object.keys(results)) {
        final.push(key + '\n' + results[key].join('\n'))
      }

      messageBody = final.join('\n\n');
    } else {
      messageBody = '경기 결과가 없습니다.';
    }

    return Response.send(messageBody, Helper.mainMenuNames);
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

  getAllDates() {
    const allDates = this.service.tournament.getAllDates();

    return Response.send('경기 날짜를 선택해주세요', [...new Set(allDates.map(date => Helper.createDateSubMenu(date)))]);
  }
}


module.exports = Main;
