const Helper = require('../util/helper');


class DefaultMenuController {
  constructor(view) {
    this.view = view;
    this.message = '원하시는 정보를 선택해 주세요.';
  }

  getDefaultMenus() {
    return this.view.send(this.message, Helper.mainMenuNames);
  }
}


module.exports = DefaultMenuController;
