const game = require('./model/game');
const Helper = require('./util/helper');


const getGameInfoByDate = (date) => {
  const results = game.tournaments
    .filter(tournament => tournament.date === date)
    .map(tournament => {
      const hour = tournament.date.getUTCHours() < 10 ? `0${tournament.date.getUTCHours()}` : tournament.date.getUTCHours();
      const [nation1, nation2] = tournament.nations;
      const group = tournament.group;
      const score = tournament.score;

      return score
        ? `${hour}시 ${group}조 ${nation1}(${score[0]}) vs ${nation2}(${score[1]})`
        : `${hour}시 ${group}조 ${nation1} vs ${nation2}`
    });

  return results.join('\n');
};

const mainMenus = new Set(['오늘경기 일정', '지난경기 결과', '경기일정표']);
const subDateMenus = new Set(game.tournaments.map(tournament => Helper.createDateSubMenu(tournament.date)));

const mainMenuButton = {
  'type': 'buttons',
  'buttons': [...mainMenus],
};

exports.handler = async (event) => {
  const content = event.content;

  if (mainMenus.has(content)) {
    if (content === '경기일정표') {
      return {
        'message' : { 'text' : '경기 날짜를 선택해주세요' },
        'keyboard': {
          'type': 'buttons',
          'buttons': [...subDateMenus],
        }
      }
    }
    if (content === '오늘경기 일정') {
      const todayDate = Helper.getLocalDate();
      const lastDateOfTodayDate = Helper.getLastDateOfTodayDate(todayDate);

      const todayGameDates = game.tournaments
        .map(tournament => tournament.date)
        .filter(tournamentDate => (tournamentDate > todayDate) && (tournamentDate < lastDateOfTodayDate));
      let header = Helper.createDateSubMenu(todayDate) + ' 경기 일정\n';
      let results;
      if (todayGameDates.length !== 0) {
        results = todayGameDates.map(todayGameDate => getGameInfoByDate(todayGameDate));
        results = results.join('\n');
      }
      if (!results) results = '경기 일정이 없습니다.';

      return {
        'message' : { 'text' : header + results },
        'keyboard': mainMenuButton
      };
    }
    if (content === '지난경기 결과') {
      const todayDate = Helper.getLocalDate();
      const lastGameDates = game.tournaments
        .map(tournament => tournament.date)
        .filter(tournamentDate => tournamentDate < todayDate);

      const results = lastGameDates.map(lastDate => {
        const header = Helper.createDateSubMenu(lastDate) + ' 경기 결과';
        const result = getGameInfoByDate(lastDate);

        return { header, result };
      }).reduce((obj, { header, result }) => {
        if (obj.hasOwnProperty(header)) obj[header].push(result);
        else obj[header] = [result];

        return obj;
      }, {});

      const final = [];
      for (const key of Object.keys(results)) {
        final.push(key + '\n' + results[key].join('\n'))
      }

      return {
        'message' : { 'text' : final.join('\n\n') },
        'keyboard': mainMenuButton
      };
    }
  } else if (subDateMenus.has(content)) {
    const gameDate = content;
    const results = game.tournaments
      .filter(tournament => Helper.createDateSubMenu(tournament.date) === gameDate)
      .map(tournament => {
        const hour = tournament.date.getUTCHours() < 10 ? `0${tournament.date.getUTCHours()}` : tournament.date.getUTCHours();
        const [nation1, nation2] = tournament.nations;
        const group = tournament.group;
        const score = tournament.score;

        return score
          ? `${hour}시 ${group}조 ${nation1}(${score[0]}) vs ${nation2}(${score[1]})`
          : `${hour}시 ${group}조 ${nation1} vs ${nation2}`
      });

    return {
      'message' : { 'text' : results.join('\n') },
      'keyboard': mainMenuButton
    };
  }

  return {
    'message' : { 'text' : '서비스 준비중 입니다. 곧 찾아 뵐께요!' },
    'keyboard': mainMenuButton
  };
};
