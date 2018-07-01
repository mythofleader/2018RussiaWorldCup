const Helper = require('../util/helper');


class LastMatchResultMenu {
  constructor(view) {
    this.view = view;
    this.menus = ['16강 결과', '토너먼트 결과'].concat(Helper.defaultMenuNames);
    this.message = '원하시는 정보를 선택해 주세요.';
  }

  getMenus() {
    return this.view.send(this.message, this.menus);
  }
}


module.exports = LastMatchResultMenu;
