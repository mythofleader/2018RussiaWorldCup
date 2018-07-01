const group = require('./group');


module.exports = [
  {
    date: new Date('2018-06-15 00:00:00'),
    group: group.A.name,
    nations: [group.A.nations.Russia, group.A.nations.SaudiArabia],
    score: [5, 0],
    highlight: "https://bit.ly/2JZ6RWi"
  },
  {
    date: new Date('2018-06-15 21:00:00'),
    group: group.A.name,
    nations: [group.A.nations.Egypt, group.A.nations.Uruguay],
    score: [0, 1],
    highlight: "https://bit.ly/2JXK6lu"
  },
  {
    date: new Date('2018-06-16 00:00:00'),
    group: group.B.name,
    nations: [group.B.nations.Morocco, group.B.nations.Iran],
    score: [0, 1],
    highlight: "https://bit.ly/2K5G65U"
  },
  {
    date: new Date('2018-06-16 03:00:00'),
    group: group.B.name,
    nations: [group.B.nations.Portugal, group.B.nations.Spain],
    score: [3, 3],
    highlight: "https://bit.ly/2K6Po1p"
  },
  {
    date: new Date('2018-06-16 19:00:00'),
    group: group.C.name,
    nations: [group.C.nations.France, group.C.nations.Australia],
    score: [2, 1],
    highlight: "https://bit.ly/2MElMXO"
  },
  {
    date: new Date('2018-06-16 22:00:00'),
    group: group.D.name,
    nations: [group.D.nations.Argentina, group.D.nations.Iceland],
    score: [1, 1],
    highlight: "https://bit.ly/2K1qjFb"
  },
  {
    date: new Date('2018-06-17 01:00:00'),
    group: group.C.name,
    nations: [group.C.nations.Peru, group.C.nations.Denmark],
    score: [0, 1],
    highlight: "https://bit.ly/2t7TVH1"
  },
  {
    date: new Date('2018-06-17 04:00:00'),
    group: group.D.name,
    nations: [group.D.nations.Croatia, group.D.nations.Nigeria],
    score: [2, 0],
    highlight: "https://bit.ly/2K09qHN"
  },
  {
    date: new Date('2018-06-17 21:00:00'),
    group: group.E.name,
    nations: [group.E.nations.Costarica, group.E.nations.Seriba],
    score: [0, 1],
    highlight: "https://bit.ly/2tjAg6l"
  },
  {
    date: new Date('2018-06-18 00:00:00'),
    group: group.F.name,
    nations: [group.F.nations.Germany, group.F.nations.Mexico],
    score: [0, 1],
    highlight: "https://bit.ly/2lks2au"
  },
  {
    date: new Date('2018-06-18 03:00:00'),
    group: group.E.name,
    nations: [group.E.nations.Brazil, group.E.nations.Switzerland],
    score: [1, 1],
    highlight: "https://bit.ly/2MAU91A"
  },
  {
    date: new Date('2018-06-18 21:00:00'),
    group: group.F.name,
    nations: [group.F.nations.Sweden, group.F.nations.Korea],
    score: [1, 0],
    highlight: "https://bit.ly/2JR4CbC"
  },
  {
    date: new Date('2018-06-19 00:00:00'),
    nations: [group.G.nations.Belguim, group.G.nations.Panama],
    group: group.G.name,
    score: [3, 0],
    highlight: "https://bit.ly/2I3CNqy"
  },
  {
    date: new Date('2018-06-19 03:00:00'),
    nations: [group.G.nations.Tunisia, group.G.nations.England],
    group: group.G.name,
    score: [1, 2],
    highlight: "https://bit.ly/2JZYHjN"
  },
  {
    date: new Date('2018-06-19 21:00:00'),
    nations: [group.H.nations.Colombia, group.H.nations.Japan],
    group: group.H.name,
    score: [1, 2],
    highlight: "https://bit.ly/2JQ2QY9"
  },
  {
    date: new Date('2018-06-20 00:00:00'),
    nations: [group.H.nations.Poland, group.H.nations.Senegal],
    group: group.H.name,
    score: [1, 2],
    highlight: "https://bit.ly/2ymSc5X"
  },
  {
    date: new Date('2018-06-20 03:00:00'),
    nations: [group.A.nations.Russia, group.A.nations.Egypt],
    group: group.A.name,
    score: [3, 1],
    highlight: "https://bit.ly/2MDGwic"
  },
  {
    date: new Date('2018-06-20 21:00:00'),
    nations: [group.B.nations.Portugal, group.B.nations.Morocco],
    score: [1, 0],
    group: group.B.name,
    highlight: "https://bit.ly/2td8p8S"
  },
  {
    date: new Date('2018-06-21 00:00:00'),
    nations: [group.A.nations.Uruguay, group.A.nations.SaudiArabia],
    group: group.A.name,
    score: [1, 0],
    highlight: "https://bit.ly/2I6Z9I1"
  },
  {
    date: new Date('2018-06-21 03:00:00'),
    nations: [group.B.nations.Iran, group.B.nations.Spain],
    group: group.B.name,
    score: [0, 1],
    highlight: "https://bit.ly/2K42skT"
  },
  {
    date: new Date('2018-06-21 21:00:00'),
    nations: [group.C.nations.Denmark, group.C.nations.Australia],
    group: group.C.name,
    score: [1, 1],
    highlight: 'https://bit.ly/2loM6sl'
  },
  {
    date: new Date('2018-06-22 00:00:00'),
    nations: [group.C.nations.France, group.C.nations.Peru],
    group: group.C.name,
    score: [1, 0],
    highlight: 'https://bit.ly/2JZect6'
  },
  {
    date: new Date('2018-06-22 03:00:00'),
    nations: [group.D.nations.Argentina, group.D.nations.Croatia],
    group: group.D.name,
    score: [0, 3],
    highlight: 'https://bit.ly/2McmR7W'
  },
  {
    date: new Date('2018-06-22 21:00:00'),
    nations: [group.E.nations.Brazil, group.E.nations.Costarica],
    score: [2, 0],
    group: group.E.name,
    highlight: 'https://bit.ly/2IhKtWu'
  },
  {
    date: new Date('2018-06-23 00:00:00'),
    nations: [group.D.nations.Nigeria, group.D.nations.Iceland],
    group: group.D.name,
    score: [2, 0],
    highlight: 'https://bit.ly/2KeNMmg',
  },
  {
    date: new Date('2018-06-23 03:00:00'),
    nations: [group.E.nations.Seriba, group.E.nations.Switzerland],
    group: group.E.name,
    score: [1, 2],
    highlight: 'https://bit.ly/2yB5FXL'
  },
  {
    date: new Date('2018-06-23 21:00:00'),
    nations: [group.G.nations.Belguim, group.G.nations.Tunisia],
    group: group.G.name,
    score: [5, 2],
    highlight: 'https://bit.ly/2yJv7e2',
  },
  {
    date: new Date('2018-06-24 00:00:00'),
    nations: [group.F.nations.Korea, group.F.nations.Mexico],
    group: group.F.name,
    score: [1, 2],
    highlight: 'https://bit.ly/2lvip8X',
  },
  {
    date: new Date('2018-06-24 03:00:00'),
    nations: [group.F.nations.Germany, group.F.nations.Sweden],
    group: group.F.name,
    score: [2, 1],
    highlight: 'https://bit.ly/2yDo0nh',
  },
  {
    date: new Date('2018-06-24 21:00:00'),
    nations: [group.G.nations.England, group.G.nations.Panama],
    group: group.G.name,
    score: [6, 1],
    highlight: 'https://bit.ly/2yDo0nh',
  },
  {
    date: new Date('2018-06-25 00:00:00'),
    nations: [group.H.nations.Japan, group.H.nations.Senegal],
    group: group.H.name,
    score: [2, 2],
    highlight: 'https://bit.ly/2yBlXQI',
  },
  {
    date: new Date('2018-06-25 03:00:00'),
    nations: [group.H.nations.Poland, group.H.nations.Colombia],
    group: group.H.name,
    score: [0, 3],
    highlight: 'https://bit.ly/2K58WnE',
  },
  {
    date: new Date('2018-06-25 23:00:00'),
    nations: [group.A.nations.Uruguay, group.A.nations.Russia],
    group: group.A.name,
    score: [3, 0],
    highlight: 'https://bit.ly/2KpcDR8',
  },
  {
    date: new Date('2018-06-25 23:00:00'),
    nations: [group.A.nations.SaudiArabia, group.A.nations.Egypt],
    group: group.A.name,
    score: [2, 1],
    highlight: 'https://bit.ly/2IrDWZv',
  },
  {
    date: new Date('2018-06-26 03:00:00'),
    nations: [group.B.nations.Iran, group.B.nations.Portugal],
    group: group.B.name,
    score: [1, 1],
    highlight: 'https://bit.ly/2IrDWZv',
  },
  {
    date: new Date('2018-06-26 03:00:00'),
    nations: [group.B.nations.Spain, group.B.nations.Morocco],
    group: group.B.name,
    score: [2, 2],
    highlight: 'https://bit.ly/2lEnqfP',
  },
  {
    date: new Date('2018-06-26 23:00:00'),
    nations: [group.C.nations.Denmark, group.C.nations.France],
    group: group.C.name,
    score: [0, 0],
    highlight: 'https://bit.ly/2KywUaa',
  },
  {
    date: new Date('2018-06-26 23:00:00'),
    nations: [group.C.nations.Australia, group.C.nations.Peru],
    group: group.C.name,
    score: [0, 2],
    highlight: 'https://bit.ly/2KsT8L0',
  },
  {
    date: new Date('2018-06-27 03:00:00'),
    nations: [group.D.nations.Nigeria, group.D.nations.Argentina],
    group: group.D.name,
    score: [1, 2],
    highlight: 'https://bit.ly/2N7ASoQ',
  },
  {
    date: new Date('2018-06-27 03:00:00'),
    nations: [group.D.nations.Iceland, group.D.nations.Croatia],
    group: group.D.name,
    score: [1, 2],
    highlight: 'https://bit.ly/2yQGocj',
  },
  {
    date: new Date('2018-06-27 23:00:00'),
    nations: [group.F.nations.Korea, group.F.nations.Germany],
    group: group.F.name,
    score: [2, 0],
    highlight: 'https://bit.ly/2MwY7ay',
  },
  {
    date: new Date('2018-06-27 23:00:00'),
    nations: [group.F.nations.Mexico, group.F.nations.Sweden],
    group: group.F.name,
    score: [0, 3],
    highlight: 'https://bit.ly/2KiUrMY',
  },
  {
    date: new Date('2018-06-28 03:00:00'),
    nations: [group.E.nations.Seriba, group.E.nations.Brazil],
    group: group.E.name,
    score: [0, 2],
    highlight: 'https://bit.ly/2MvLXip',
  },
  {
    date: new Date('2018-06-28 03:00:00'),
    nations: [group.E.nations.Switzerland, group.E.nations.Costarica],
    group: group.E.name,
    score: [2, 2],
    highlight: 'https://bit.ly/2MpVEyE',
  },
  {
    date: new Date('2018-06-28 23:00:00'),
    nations: [group.H.nations.Japan, group.H.nations.Poland],
    score: [0, 1],
    group: group.H.name,
    highlight: 'https://bit.ly/2Kq2CGP',
  },
  {
    date: new Date('2018-06-28 23:00:00'),
    nations: [group.H.nations.Senegal, group.H.nations.Colombia],
    group: group.H.name,
    score: [0, 1],
    highlight: 'https://bit.ly/2NczK3k',
  },
  {
    date: new Date('2018-06-29 03:00:00'),
    nations: [group.G.nations.England, group.G.nations.Belguim],
    group: group.G.name,
    score: [0, 1],
    highlight: 'https://bit.ly/2KhmXPk',
  },
  {
    date: new Date('2018-06-29 03:00:00'),
    nations: [group.G.nations.Panama, group.G.nations.Tunisia],
    group: group.G.name,
    score: [1, 2],
    highlight: 'https://bit.ly/2My0FVU',
  }
];
