const Helper = require('../util/helper');


class MatchTablesDateController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.message = { notExist: '경기 일정이 없습니다.' };
  }

  getMatchByDate(menuDate) {
    const [month, day] = menuDate.split(' ');
    const fromDate = new Date(`2018-${month.substr(0, 2)}-${day.substr(0, 2)} 00:00:00`);
    const toDate = Helper.getTomorrowStartDate(fromDate);

    const isTournamentFinish = this.model.tournament.isFinish(fromDate);
    const isRound16Finish = this.model.round16.isFinish(fromDate);
    const isRound8Finish = this.model.round8.isFinish(fromDate);

    let results = [];
    if (!isTournamentFinish) results = MatchTablesDateController.createTournamentMessages(this.model.tournament.getFromStartToEndDate(fromDate, toDate))
    if (!isRound16Finish) results = MatchTablesDateController.createRound16Messages(this.model.round16.getFromStartToEndDate(fromDate, toDate));
    if (!isRound8Finish) results = MatchTablesDateController.createRound8Messages(this.model.round8.getFromStartToEndDate(fromDate, toDate));

    const message = results.length === 0
      ? this.message.notExist
      : results;
    const buttons = Helper.mainMenuNames;

    return this.view.send(message, buttons, true);
  }

  static createRound16Messages(matches) {
    return matches.map(match => {
      const rawHour = match.date.getHours();
      const hour = rawHour < 10 ? `0${rawHour}` : rawHour;
      const [nation1, nation2] = match.nations;
      const score = match.score;
      const highlight = match.highlight;

      const header = `${hour}시 16강\n`;
      const body = score
        ? `${nation1}(${score[0]}) vs ${nation2}(${score[1]})\n`
        : `${nation1} vs ${nation2}\n`;
      const bottom = highlight ? `${highlight}\n` : '';

      return header + body + bottom;
    }).join('\n');
  }

  static createRound8Messages(matches) {
    return matches.map(match => {
      const rawHour = match.date.getHours();
      const hour = rawHour < 10 ? `0${rawHour}` : rawHour;
      const [nation1, nation2] = match.nations;
      const score = match.score;
      const highlight = match.highlight;

      const header = `${hour}시 8강\n`;
      const body = score
        ? `${nation1}(${score[0]}) vs ${nation2}(${score[1]})\n`
        : `${nation1} vs ${nation2}\n`;
      const bottom = highlight ? `${highlight}\n` : '';

      return header + body + bottom;
    }).join('\n');
  }

  static createTournamentMessages(matches) {
    return matches.map(match => {
      const rawHour = match.date.getHours();
      const hour = rawHour < 10 ? `0${rawHour}` : rawHour;
      const [nation1, nation2] = match.nations;
      const group = match.group;
      const score = match.score;
      const highlight = match.highlight;

      const header = `${hour}시 ${group}조\n`;
      const body = score
        ? `${nation1}(${score[0]}) vs ${nation2}(${score[1]})\n`
        : `${nation1} vs ${nation2}\n`;
      const bottom = highlight ? `${highlight}\n` : '';

      return header + body + bottom;
    }).join('\n');
  }
}


module.exports = MatchTablesDateController;
