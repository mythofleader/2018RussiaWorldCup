const Helper = require('./util/helper');
const Response = require('./util/reponse');


class Router {
  constructor(service) {
    this.service = service;
    this.defaultMenu = ['오늘경기 일정', '지난경기 결과', '경기일정표'];
    this._setMenu();
  }

  _setMenu() {
    const tournamentDates = this.service.tournament.getAllDates();
    this.subDateMenu = new Set(tournamentDates.map(tournamentDate => Helper.createDateSubMenu(tournamentDate)));

    this.menus = new Set(this.defaultMenu);
    for (const subMenu of this.subDateMenu) {
      this.menus.add(subMenu);
    }
  }

  hasMenu(menu) {
    return this.menus.has(menu);
  }

  getTodayMatchInfo(todayDate = Helper.getLocalDate()) {
    let todayMatches;
    let messageHeader = Helper.createDateSubMenu(todayDate) + ' 경기 일정\n';
    let messageBody;

    const lastDateOfTodayDate = Helper.getLastDateOfTodayDate(todayDate);
    if (!this.service.tournament.isFinish(todayDate)) {
      todayMatches = this.service.tournament.getFromStartToEndDate(todayDate, lastDateOfTodayDate);
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

    return Response.send(messageHeader + messageBody, this.defaultMenu);
  }

  getLastMatchInfo(todayDate = Helper.getLocalDate()) {
    let lastMatches;
    let messageBody;

    if (!this.service.tournament.isFinish(todayDate)) {
      const firstTournamentDate = this.service.tournament.getFirstDate();
      lastMatches = this.service.tournament.getFromStartToEndDate(firstTournamentDate, todayDate);
    }

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

    return Response.send(messageBody, this.defaultMenu);
  }

  getAllMatchDates() {
    return Response.send('경기 날짜를 선택해주세요', [...this.subDateMenu]);
  }

  get
}


module.exports = Router;
