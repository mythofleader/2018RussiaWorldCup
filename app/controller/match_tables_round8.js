const Helper = require('../util/helper');


class MatchTablesRound8 {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.message = { notExist: '경기 일정이 없습니다.' };
  }

  getAllMatches() {
    const matches = this.model.round8.getAll();
    const message = matches.length === 0
      ? this.message.notExist
      : MatchTablesRound8.createMessageIfMatchesExist(matches);
    const buttons = Helper.mainMenuNames;

    return this.view.send(message, buttons, true);
  }

  static createMessageIfMatchesExist(matches) {
    const results = matches.map(match => {
      const messageHeader = Helper.convertKoreanDate(match.date);
      const rawHour = match.date.getHours();
      const hour = rawHour < 10 ? `0${rawHour}` : rawHour;
      const [nation1, nation2] = match.nations;
      const score = match.score;
      const highlight = match.highlight;

      const header = `${hour}시 `;
      const body = score
        ? `${nation1}(${score[0]}) vs ${nation2}(${score[1]})`
        : `${nation1} vs ${nation2}`;
      const bottom = highlight ? `\n${highlight}\n` : '';

      const messageBody = header + body + bottom;

      return { messageHeader, messageBody };
    }).reduce((obj, { messageHeader, messageBody }) => {
      if (obj.hasOwnProperty(messageHeader)) obj[messageHeader].push(messageBody);
      else obj[messageHeader] = [messageBody];

      return obj;
    }, {});

    const messages = ['8강 경기 일정입니다.'];
    for (const key of Object.keys(results)) {
      messages.push(key + '\n' + results[key].join('\n'))
    }

    return messages.join('\n\n');
  }
}


module.exports = MatchTablesRound8;
