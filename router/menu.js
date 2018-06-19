const Helper = require('../util/helper');


class Menu {
  constructor(controller) {
    this.controller = controller;
    this.setMenu();
  }

  setMenu() {
    const datesResponse = this.controller.sub.getAllDates();
    const groupResponse = this.controller.sub.getAllGroupNames();

    this.mainMenus = new Set(Helper.mainMenuNames);
    this.subMenusInMatchTables = new Set(Helper.subMenuNamesInMatchTables);
    this.subDateMenus = new Set(datesResponse.keyboard.buttons);
    this.subGroupMenus = new Set(groupResponse.keyboard.buttons);
    this.defaultMenus = new Set(Helper.defaultMenuNames);
  }

  getData(menu) {
    if (this.defaultMenus.has(menu)) return this.controller.main.getDefaultMenus();

    if (this.mainMenus.has(menu)) {
      if (menu === Helper.mainMenuNames[0]) return this.controller.main.getTodayMatchInfo();
      else if (menu === Helper.mainMenuNames[1]) return this.controller.main.getLastMatchDates();
      else if (menu === Helper.mainMenuNames[2]) return this.controller.main.getSubMenus();
    }

    if (this.subMenusInMatchTables.has(menu)) {
      if (menu === Helper.subMenuNamesInMatchTables[0]) return this.controller.sub.getAllDates();
      else if (menu === Helper.subMenuNamesInMatchTables[1]) return this.controller.sub.getAllGroupNames();
    }

    if (this.subDateMenus.has(menu)) return this.controller.sub.getMatchInfoBySubMenuDate(menu);
    if (this.subGroupMenus.has(menu)) return this.controller.sub.getMatchInfoByGroup(menu);
  }
}


module.exports = Menu;
