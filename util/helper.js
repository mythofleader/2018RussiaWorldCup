class Helper {
  static createDateSubMenu(date) {
    if (!(date instanceof Date)) throw new TypeError('date');

    const m = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const d = date.getDate();
    const dayOfWeek = Helper.weekDay[date.getDay()];

    return `${m}월 ${d}일 ${dayOfWeek}`;
  }

  static getLocalDate() {
    const d = new Date();
    d.setHours(0, 0, 0, 0);

    return d;
  }

  static getTomorrowDate() {
    const todayDate = Helper.getLocalDate();
    const date = new Date(todayDate);
    date.setDate(date.getDate() + 1);

    return date;
  }

  static getLastDateOfTodayDate(todayDate) {
    if (!(todayDate instanceof Date)) throw new TypeError('todayDate');

    const nextDate = new Date(todayDate);
    nextDate.setDate(todayDate.getDate() + 1);
    nextDate.setHours(0, 0, 0, 0);

    return nextDate;
  }
}

Helper.weekDay = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
Helper.KOREAN_LOCAL_HOUR = 9;
Helper.mainMenuNames = ['오늘경기 일정', '지난경기 결과', '경기일정표'];


module.exports = Helper;
