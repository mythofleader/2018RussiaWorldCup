const Helper = require('../util/helper');


class MatchTablesMenuController {
  constructor(view) {
    this.view = view;
    this.menus = ['4강', '8강','16강','요일별', '그룹별'].concat(Helper.defaultMenuNames);
    this.message = '원하시는 정보를 선택해주세요.';
  }

  getMenus() {
    return this.view.send(this.message, this.menus);
  }
}


module.exports = MatchTablesMenuController;
