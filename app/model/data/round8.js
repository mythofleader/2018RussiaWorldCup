const group = require('./group');


module.exports = [
  {
    date: new Date('2018-07-06 23:00:00'),
    nations: [group.A.nations.Uruguay, group.C.nations.France],
    score: [0, 2],
    highlight: "https://bit.ly/2KN2VLU",
  },
  {
    date: new Date('2018-07-07 03:00:00'),
    nations: [group.E.nations.Brazil, group.G.nations.Belguim],
    score: [1, 2],
    highlight: "https://bit.ly/2zgRzLx",
  },
  {
    date: new Date('2018-07-07 23:00:00'),
    nations: [group.F.nations.Sweden, group.G.nations.England],
    score: [0, 2],
    highlight: "https://bit.ly/2L1jksQ",
  },
  {
    date: new Date('2018-07-08 03:00:00'),
    nations: [group.A.nations.Russia, group.D.nations.Croatia],
    score: [2, 2],
    highlight: "https://bit.ly/2MWVsaA",
  },
];
