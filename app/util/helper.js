class Helper {

  static convertKoreanDate(date) {
    if (!(date instanceof Date)) throw new TypeError('date');

    const m = date.getMonth() + 1 > 9
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;
    const d = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

    const koreanMonth = `${m}월`;
    const koreanDate = `${d}일`;
    const koreanDayOfWeek = Helper.weekDay[date.getDay()];

    return `${koreanMonth} ${koreanDate} ${koreanDayOfWeek}`;
  }

  static getTodayDate(localHour = Helper.localHour) {
    const d = new Date();
    d.setHours(d.getHours() + localHour);

    return d;
  }

  static getTodayStartDate(d = Helper.getTodayDate()) {
    d.setHours(0, 0, 0, 0);
    return d;
  }

  static getTomorrowStartDate(todayDate = Helper.getTodayStartDate()) {
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
Helper.localHour = 9;
Helper.msecPerMinute = 1000 * 60;
Helper.expCapitalOneLetterExp = new RegExp('^[A-Z]$');
Helper.dateExp = new RegExp('^[0-9+]{2,2}[가-힣]{1,1} [0-9+]{2,2}[가-힣]{1,1} [가-힣+]{3,3}$');


module.exports = Helper;
