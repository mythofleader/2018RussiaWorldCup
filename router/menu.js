const Helper = require('../util/helper');


class Menu {
  constructor(controller) {
    this.controller = controller;
    this.setMenu();
  }

  setMenu() {
    const response = this.controller.main.getAllDates();
    this.mainMenus = new Set(Helper.mainMenuNames);
    this.subDateMenus = new Set(response.keyboard.buttons);
  }

  getData(menu) {
    if (this.mainMenus.has(menu)) {
      if (menu === Helper.mainMenuNames[0]) return this.controller.main.getTodayMatchInfo();
      else if (menu === Helper.mainMenuNames[1]) return this.controller.main.getLastMatchInfo();
      else if (menu === Helper.mainMenuNames[2]) return this.controller.main.getAllDates();
    }
    
    if (this.subDateMenus.has(menu)) {
      return this.controller.sub.getMatchInfoBySubMenuDate(menu);
    }
  }
}


module.exports = Menu;
