class Helper {
  static createDateSubMenu(date) {
    if (!(date instanceof Date)) throw new TypeError('date');

    const m = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const d = date.getDate();
    const dayOfWeek = Helper.weekDay[date.getDay()];

    return `${m}월 ${d}일 ${dayOfWeek}`;
  }

  static getTodayDate() {
    return new Date();
  }

  static getTodayStartDate() {
    const d = Helper.getTodayDate();
    d.setHours(0, 0, 0, 0);

    return d;
  }

  static getTodayLastDate() {
    const todayDate = Helper.getTodayStartDate();
    const date = new Date(todayDate);
    date.setDate(date.getDate() + 1);

    return date;
  }
}

Helper.weekDay = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
Helper.KOREAN_LOCAL_HOUR = 9;
Helper.mainMenuNames = ['오늘경기 일정', '지난경기 결과', '경기일정표'];
Helper.subMenuNamesInMatchTables = ['요일별', '그룹별'];
Helper.defaultMenuNames = ['처음으로'];


module.exports = Helper;
