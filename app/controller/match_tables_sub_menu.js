const Helper = require('../util/helper');


class MatchTablesSubMenu {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.message = {
      dates: '경기 날짜를 선택해주세요.',
      group: '그룹을 선택해 주세요.',
    };
  }

  getAllMatchDates() {
    const results = this.model.tournament.getAllDates();
    const allDates = new Set(results.map(date => Helper.convertKoreanDate(date)));

    const message = this.message.dates;
    const buttons = [...allDates].concat(Helper.defaultMenuNames);

    return this.view.send(message, buttons);
  }

  getAllMatchGroups() {
    const allGroups = this.model.tournament.getAllGroupNames();

    const message = this.message.group;
    const buttons = [...allGroups].concat(Helper.defaultMenuNames);

    return this.view.send(message, buttons);
  }
}


module.exports = MatchTablesSubMenu;
