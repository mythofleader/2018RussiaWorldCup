const Helper = require('../util/helper');


class TodayMatchController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.message = { notExist: '경기 일정이 없습니다.' };
  }

  getAllMatches(todayStartDate = Helper.getTodayStartDate()) {
    const tomorrowStartDate = Helper.getTomorrowStartDate(todayStartDate);
    const todayMatches = this.model.tournament.isFinish(todayStartDate)
      ? []
      : this.model.tournament.getFromStartToEndDate(todayStartDate, tomorrowStartDate);

    const messageHeader = Helper.convertKoreanDate(todayStartDate) + ' 경기 일정\n\n';
    const messageBody = todayMatches.length === 0
      ? this.message.notExist
      : TodayMatchController.createMessageIfMatchesExist(todayMatches);

    const message = messageHeader + messageBody;
    const buttons = Helper.mainMenuNames;

    return this.view.send(message, buttons, true);
  }

  static createMessageIfMatchesExist(todayMatches) {
    const now = Helper.getTodayDate();

    return todayMatches.map(todayMatch => {
      const rawMatchHour = todayMatch.date.getHours();
      const matchHour = rawMatchHour < 10 ? `0${rawMatchHour}` : rawMatchHour;
      const [nation1, nation2] = todayMatch.nations;
      const group = todayMatch.group;
      const score = todayMatch.score;
      const highlight = todayMatch.highlight;

      const header = `${matchHour}시 ${group}조\n`;
      const bottom = highlight ? `${highlight}\n` : '';

      const interval = todayMatch.date.getTime() - now.getTime();
      const min = Math.floor(interval / Helper.msecPerMinute);

      let body = score ? `${nation1}(${score[0]}) vs ${nation2}(${score[1]})` : `${nation1} vs ${nation2}`;
      if (min > 0) body += ` (경기전)\n`;
      else {
        if (Math.abs(min) < 115) body += ` (경기중)\n`;
        else body += ` (경기종료)\n`;
      }

      return header + body + bottom;
    }).join('\n');
  }
}


module.exports = TodayMatchController;
