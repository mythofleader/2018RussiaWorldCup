const group = require('./group');


module.exports = [
  {
    date: new Date('2018-06-30 23:00:00'),
    nations: [group.C.nations.France, group.D.nations.Argentina],
    score: [4, 3],
    highlight: "https://bit.ly/2tTJHtF"
  },
  {
    date: new Date('2018-07-01 03:00:00'),
    nations: [group.A.nations.Uruguay, group.B.nations.Portugal],
    score: [2, 1],
    highlight: "https://bit.ly/2yU7aRi"
  },
  {
    date: new Date('2018-07-01 23:00:00'),
    nations: [group.B.nations.Spain, group.A.nations.Russia],
    score: [1, 1],
    highlight: "https://bit.ly/2MG8GIB"
  },
  {
    date: new Date('2018-07-02 03:00:00'),
    nations: [group.D.nations.Croatia, group.C.nations.Denmark],
    score: [1, 1],
    highlight: "https://bit.ly/2MGcDx4"
  },
  {
    date: new Date('2018-07-02 23:00:00'),
    nations: [group.E.nations.Brazil, group.F.nations.Mexico],
    score: [2, 0],
    highlight: "https://bit.ly/2ML9jRb"
  },
  {
    date: new Date('2018-07-03 03:00:00'),
    nations: [group.G.nations.Belguim, group.H.nations.Japan],
    score: [3, 2],
    highlight: "https://bit.ly/2z4x9FJ"
  },
  {
    date: new Date('2018-07-03 23:00:00'),
    nations: [group.F.nations.Sweden, group.E.nations.Switzerland],
    score: [1, 0],
    highlight: "https://bit.ly/2lRbFCB"
  },
  {
    date: new Date('2018-07-04 03:00:00'),
    nations: [group.H.nations.Colombia, group.G.nations.England],
    score: [1, 1],
    highlight: "https://bit.ly/2Kw9m6M"
  }
];
