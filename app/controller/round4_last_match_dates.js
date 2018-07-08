const Helper = require('../util/helper');


class Round4LastMatchDatesController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.message = {
      notExist: '지난 경기 결과가 존재하지 않습니다.',
      exist: '경기 날짜를 선택해주세요.',
    }
  }

  getAllDates(tomorrowStartDate = Helper.getTomorrowStartDate()) {
    const firstRound16Date = this.model.round4.getFirstDate();
    const lastMatches = this.model.round4.getFromStartToEndDate(firstRound16Date, tomorrowStartDate);
    const lastMatchDates = lastMatches.length === 0
      ? []
      : lastMatches
        .filter(({score}) => score !== null)
        .map(lastMatch => Helper.convertKoreanDate(lastMatch.date));

    const message = lastMatchDates.length === 0
      ? this.message.notExist
      : this.message.exist;
    const buttons = [...new Set(lastMatchDates)].concat(Helper.defaultMenuNames);

    return this.view.send(message, buttons);
  }
}


module.exports = Round4LastMatchDatesController;
