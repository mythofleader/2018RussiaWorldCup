const Helper = require('../util/helper');


class Router {
  constructor(controller) {
    this.controller = controller;
  }

  route(path) {
    if (path === '오늘경기 일정') return this.controller.todayMatch.getAllMatches();
    else if (path === '지난경기 결과') return this.controller.lastMatchResultMenu.getMenus();
    else if (path === '토너먼트 결과') return this.controller.tournamentLastMatchDates.getAllDates();
    else if (path === '16강 결과') return this.controller.round16LastMatchDates.getAllDates();
    else if (path === '경기일정표') return this.controller.matchTablesMenu.getMenus();
    else if (path === '요일별') return this.controller.matchTablesSubMenu.getAllMatchDates();
    else if (path === '그룹별') return this.controller.matchTablesSubMenu.getAllMatchGroups();
    else if (path === '16강') return this.controller.matchTablesRound16.getAllMatches();
    else if (Helper.dateExp.test(path)) return this.controller.matchTablesDate.getMatchByDate(path);
    else if (Helper.expCapitalOneLetterExp.test(path)) return this.controller.matchTablesGroup.getMatchByGroup(path);
    else return this.controller.defaultMenu.getDefaultMenus();
  }
}


module.exports = Router;
