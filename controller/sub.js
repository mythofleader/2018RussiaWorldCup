const Helper = require('../util/helper');
const Response = require('../util/reponse');


class Sub {
  constructor(service) {
    this.service = service;
  }

  getMatchInfoBySubMenuDate(subMenuDate) {
    const [month, day] = subMenuDate.split(' ');
    const date = `2018-${month.substr(0, 2)}-${day.substr(0, 2)}`;
    const fromDate = new Date(`${date} 00:00:00`);
    const toDate = new Date(fromDate);
    toDate.setDate(fromDate.getDate() + 1);

    const matches = this.service.tournament.getFromStartToEndDate(fromDate, toDate);
    if (matches.length === 0) throw new Error('no match info');

    const results = matches.map(match => {
      const rawHour = match.date.getHours();
      const hour = rawHour < 10 ? `0${rawHour}` : rawHour;
      const [nation1, nation2] = match.nations;
      const group = match.group;
      const score = match.score;

      return score
        ? `${hour}시 ${group}조 ${nation1}(${score[0]}) vs ${nation2}(${score[1]})`
        : `${hour}시 ${group}조 ${nation1} vs ${nation2}`
    });

    return Response.send(results.join('\n'), Helper.mainMenuNames);
  }
}


module.exports = Sub;
