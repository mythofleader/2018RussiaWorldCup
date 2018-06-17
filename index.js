const groups = {
  A: {
    Russia: '러시아',
    SaudiArabia: '사우디아라비아',
    Egypt: '이집트',
    Uruguay: '우루과이'
  },
  B: {
    Portugal: '포르투갈',
    Spain:  '스페인',
    Morocco: '모로코',
    Iran: '이란',
  },
  C: {
    France : '프랑스',
    Australia: '호주',
    Peru: '페루',
    Denmark: '덴마크',
  },
  D: {
    Argentina: '아르헨티나',
    Iceland: '아이슬란드',
    Croatia: '크로아티아',
    Nigeria: '나이지리아'
  },
  E: {
    Brazil: '브라질',
    Switzerland: '스위스',
    Costarica: '코스타리카',
    Seriba: '세르비아',
  },
  F: {
    Germany: '독일',
    Mexico: '멕시코',
    Sweden: '스웨덴',
    Korea: '한국',
  },
  G: {
    Belguim: '벨기에',
    Panama: '파나마',
    Tunisia: '튀니지',
    England: '영국',
  },
  H: {
    Poland: '폴란드',
    Senegal: '세네갈',
    Colombia: '콜롬비아',
    Japan: '일본',
  },
};
const games = [
  {
    date: {
      ymd: '2018-06-15',
      hm: '00:00'
    },
    nations: [groups.A.Russia, groups.A.SaudiArabia],
    score: [5, 0],
    group: 'A',
  },
  {
    date: {
      ymd: '2018-06-15',
      hm: '21:00'
    },
    nations: [groups.A.Egypt, groups.A.Uruguay],
    score: [0, 1],
    group: 'A',
  },
  {
    date: {
      ymd: '2018-06-16',
      hm: '00:00'
    },
    nations: [groups.B.Morocco, groups.B.Iran],
    score: [0, 1],
    group: 'B',
  },
  {
    date: {
      ymd: '2018-06-16',
      hm: '03:00'
    },
    nations: [groups.B.Portugal, groups.B.Spain],
    score: [3, 3],
    group: 'B',
  },
  {
    date: {
      ymd: '2018-06-16',
      hm: '19:00'
    },
    nations: [groups.C.France, groups.C.Australia],
    score: [2, 1],
    group: 'C',
  },
  {
    date: {
      ymd: '2018-06-16',
      hm: '03:00'
    },
    nations: [groups.D.Argentina, groups.D.Iceland],
    score: [1, 1],
    group: 'D',
  },
  {
    date: {
      ymd: '2018-06-17',
      hm: '01:00'
    },
    nations: [groups.C.Peru, groups.C.Denmark],
    score: [0, 1],
    group: 'C',
  },
  {
    date: {
      ymd: '2018-06-17',
      hm: '04:00'
    },
    nations: [groups.D.Croatia, groups.D.Nigeria],
    score: [2, 0],
    group: 'D',
  },
  {
    date: {
      ymd: '2018-06-17',
      hm: '21:00'
    },
    nations: [groups.E.Costarica, groups.E.Seriba],
    group: 'E',
  },
  {
    date: {
      ymd: '2018-06-18',
      hm: '00:00'
    },
    nations: [groups.F.Germany, groups.F.Mexico],
    group: 'F',
  },
  {
    date: {
      ymd: '2018-06-18',
      hm: '03:00'
    },
    nations: [groups.E.Brazil, groups.E.Switzerland],
    group: 'E',
  },
  {
    date: {
      ymd: '2018-06-18',
      hm: '21:00'
    },
    nations: [groups.F.Sweden, groups.F.Korea],
    group: 'F',
  },
  {
    date: {
      ymd: '2018-06-19',
      hm: '00:00'
    },
    nations: [groups.G.Belguim, groups.G.Panama],
    group: 'G',
  },
  {
    date: {
      ymd: '2018-06-19',
      hm: '03:00'
    },
    nations: [groups.G.Tunisia, groups.G.England],
    group: 'G',
  },
  {
    date: {
      ymd: '2018-06-19',
      hm: '21:00'
    },
    nations: [groups.H.Colombia, groups.H.Japan],
    group: 'H',
  },
  {
    date: {
      ymd: '2018-06-20',
      hm: '00:00'
    },
    nations: [groups.H.Poland, groups.H.Senegal],
    group: 'H',
  },
  {
    date: {
      ymd: '2018-06-20',
      hm: '03:00'
    },
    nations: [groups.A.Russia, groups.A.Egypt],
    group: 'A',
  },
  {
    date: {
      ymd: '2018-06-20',
      hm: '21:00'
    },
    nations: [groups.B.Portugal, groups.B.Morocco],
    group: 'B',
  },
  {
    date: {
      ymd: '2018-06-21',
      hm: '00:00'
    },
    nations: [groups.A.Uruguay, groups.A.SaudiArabia],
    group: 'A',
  },
  {
    date: {
      ymd: '2018-06-21',
      hm: '03:00'
    },
    nations: [groups.B.Iran, groups.B.Spain],
    group: 'B',
  },
  {
    date: {
      ymd: '2018-06-21',
      hm: '21:00'
    },
    nations: [groups.C.Denmark, groups.C.Australia],
    group: 'C',
  },
  {
    date: {
      ymd: '2018-06-22',
      hm: '00:00'
    },
    nations: [groups.C.France, groups.C.Peru],
    group: 'C',
  },
  {
    date: {
      ymd: '2018-06-22',
      hm: '03:00'
    },
    nations: [groups.D.Argentina, groups.D.Croatia],
    group: 'D',
  },
  {
    date: {
      ymd: '2018-06-22',
      hm: '21:00'
    },
    nations: [groups.E.Brazil, groups.E.Costarica],
    group: 'E',
  },
  {
    date: {
      ymd: '2018-06-23',
      hm: '00:00'
    },
    nations: [groups.D.Nigeria, groups.D.Iceland],
    group: 'D',
  },
  {
    date: {
      ymd: '2018-06-23',
      hm: '03:00'
    },
    nations: [groups.E.Seriba, groups.E.Switzerland],
    group: 'E',
  },
  {
    date: {
      ymd: '2018-06-23',
      hm: '21:00'
    },
    nations: [groups.G.Belguim, groups.G.Tunisia],
    group: 'G',
  },
  {
    date: {
      ymd: '2018-06-24',
      hm: '00:00'
    },
    nations: [groups.F.Korea, groups.F.Mexico],
    group: 'F',
  },
  {
    date: {
      ymd: '2018-06-24',
      hm: '03:00'
    },
    nations: [groups.F.Germany, groups.F.Sweden],
    group: 'F',
  },
  {
    date: {
      ymd: '2018-06-24',
      hm: '21:00'
    },
    nations: [groups.G.England, groups.G.Panama],
    group: 'G',
  },
  {
    date: {
      ymd: '2018-06-25',
      hm: '00:00'
    },
    nations: [groups.H.Japan, groups.H.Senegal],
    group: 'H',
  },
  {
    date: {
      ymd: '2018-06-25',
      hm: '03:00'
    },
    nations: [groups.H.Poland, groups.H.Colombia],
    group: 'H',
  },
  {
    date: {
      ymd: '2018-06-25',
      hm: '23:00'
    },
    nations: [groups.A.Uruguay, groups.A.Russia],
    group: 'A',
  },
  {
    date: {
      ymd: '2018-06-25',
      hm: '23:00'
    },
    nations: [groups.A.SaudiArabia, groups.A.Egypt],
    group: 'A',
  },
  {
    date: {
      ymd: '2018-06-26',
      hm: '03:00'
    },
    nations: [groups.B.Iran, groups.B.Portugal],
    group: 'B',
  },
  {
    date: {
      ymd: '2018-06-26',
      hm: '03:00'
    },
    nations: [groups.B.Spain, groups.B.Morocco],
    group: 'B',
  },
  {
    date: {
      ymd: '2018-06-26',
      hm: '23:00'
    },
    nations: [groups.C.Denmark, groups.C.France],
    group: 'C',
  },
  {
    date: {
      ymd: '2018-06-26',
      hm: '23:00'
    },
    nations: [groups.C.Australia, groups.C.Peru],
    group: 'C',
  },
  {
    date: {
      ymd: '2018-06-27',
      hm: '03:00'
    },
    nations: [groups.D.Nigeria, groups.D.Argentina],
    group: 'D',
  },
  {
    date: {
      ymd: '2018-06-27',
      hm: '03:00'
    },
    nations: [groups.D.Iceland, groups.D.Croatia],
    group: 'D',
  },
  {
    date: {
      ymd: '2018-06-27',
      hm: '23:00'
    },
    nations: [groups.F.Korea, groups.F.Germany],
    group: 'F',
  },
  {
    date: {
      ymd: '2018-06-27',
      hm: '23:00'
    },
    nations: [groups.F.Mexico, groups.F.Sweden],
    group: 'F',
  },
  {
    date: {
      ymd: '2018-06-28',
      hm: '03:00'
    },
    nations: [groups.E.Seriba, groups.E.Brazil],
    group: 'E',
  },
  {
    date: {
      ymd: '2018-06-28',
      hm: '03:00'
    },
    nations: [groups.E.Switzerland, groups.E.Costarica],
    group: 'E',
  },
  {
    date: {
      ymd: '2018-06-28',
      hm: '23:00'
    },
    nations: [groups.H.Japan, groups.H.Poland],
    group: 'H',
  },
  {
    date: {
      ymd: '2018-06-28',
      hm: '23:00'
    },
    nations: [groups.H.Senegal, groups.H.Colombia],
    group: 'H',
  },
  {
    date: {
      ymd: '2018-06-29',
      hm: '03:00'
    },
    nations: [groups.G.England, groups.G.Belguim],
    group: 'G',
  },
  {
    date: {
      ymd: '2018-06-29',
      hm: '03:00'
    },
    nations: [groups.G.Panama, groups.G.Tunisia],
    group: 'G',
  }
];
const gameDates = new Set(games.map(game => game.date.ymd));

const getTodayDate = (isNeedHMS = false) => {
  const utc = new Date();
  utc.setHours(utc.getHours() + 9);

  const month = utc.getUTCMonth() + 1 > 9 ? utc.getUTCMonth() + 1 : `0${utc.getUTCMonth() + 1}`;
  const day = utc.getUTCDate();
  const year = utc.getUTCFullYear();
  const hour = utc.getUTCHours();
  const min = utc.getUTCMinutes();
  const sec = utc.getUTCMilliseconds();

  const ymd = `${year}-${month}-${day}`;
  const hms = `${hour}:${min}:${sec}`;
  return isNeedHMS ? `${ymd} ${hms}` : ymd;
};
const getGameInfoByDate = (date) => {
  const results = games
    .filter(game => game.date.ymd === date)
    .map(game => {
      const hourMin = game.date.hm;
      const [nation1, nation2] = game.nations;
      const group = game.group;
      const score = game.score;

      return score
        ? `${hourMin} ${group}조 ${nation1}(${score[0]}) vs ${nation2}(${score[1]})`
        : `${hourMin} ${group}조 ${nation1} vs ${nation2}`
    });

  return results.join('\n');
};

const mainMenus = new Set(['오늘경기 일정', '지난경기 결과', '경기일정표']);
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
          'buttons': [...gameDates],
        }
      }
    }
    if (content === '오늘경기 일정') {
      const todayDate = getTodayDate();
      let header = todayDate + ' 경기 일정\n';

      let result;
      if (gameDates.has(todayDate)) result = getGameInfoByDate(todayDate);
      if (!result) result = '경기 일정이 없습니다.';

      return {
        'message' : { 'text' : header + result },
        'keyboard': mainMenuButton
      };
    }
    if (content === '지난경기 결과') {
      const todayDate = getTodayDate();
      const lastDates = [...gameDates].filter(date => date < todayDate);

      const results = lastDates.map(lastDate => {
        let header = lastDate + ' 경기 결과\n';
        let result = getGameInfoByDate(lastDate);

        return header + result;
      });

      return {
        'message' : { 'text' : results.join('\n\n') },
        'keyboard': mainMenuButton
      };
    }
  } else if (gameDates.has(content)) {
    const gameDate = content;
    const result = getGameInfoByDate(gameDate);

    return {
      'message' : { 'text' : result },
      'keyboard': mainMenuButton
    };
  }

  return {
    'message' : { 'text' : '서비스 준비중 입니다. 곧 찾아 뵐께요!' },
    'keyboard': mainMenuButton
  };
};
