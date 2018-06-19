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

  getMatchInfoByGroup(groupName) {
    const matches = this.service.tournament.getByGroupName(groupName);
    if (matches.length === 0) throw new Error('no match info by groupName');

    const results = matches.map(match => {
      const messageHeader = Helper.createDateSubMenu(match.date);
      const rawHour = match.date.getHours();
      const hour = rawHour < 10 ? `0${rawHour}` : rawHour;
      const [nation1, nation2] = match.nations;
      const score = match.score;

      const messageBody = score
        ? `${hour}시 ${nation1}(${score[0]}) vs ${nation2}(${score[1]})`
        : `${hour}시 ${nation1} vs ${nation2}`;

      return { messageHeader, messageBody };
    }).reduce((obj, { messageHeader, messageBody }) => {
      if (obj.hasOwnProperty(messageHeader)) obj[messageHeader].push(messageBody);
      else obj[messageHeader] = [messageBody];

      return obj;
    }, {});

    const final = [groupName + '조 경기 일정입니다.'];
    for (const key of Object.keys(results)) {
      final.push(key + '\n' + results[key].join('\n'))
    }

    return Response.send(final.join('\n\n'), Helper.mainMenuNames);
  }

  getAllDates() {
    const allDates = this.service.tournament.getAllDates();
    const results = new Set(allDates.map(date => Helper.createDateSubMenu(date)));

    return Response.send('경기 날짜를 선택해주세요', [...results, Helper.defaultMenuNames[0]]);
  }

  getAllGroupNames() {
    const allGroups = new Set(this.service.tournament.getAllGroupNames());

    return Response.send('토너먼트 그룹을 선택해 주세요', [...allGroups, Helper.defaultMenuNames[0]]);
  }
}


module.exports = Sub;
