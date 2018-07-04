const group = require('./group');


module.exports = [
  {
    date: new Date('2018-07-06 23:00:00'),
    nations: [group.A.nations.Uruguay, group.C.nations.France],
  },
  {
    date: new Date('2018-07-07 03:00:00'),
    nations: [group.E.nations.Brazil, group.G.nations.Belguim],
  },
  {
    date: new Date('2018-07-07 23:00:00'),
    nations: [group.F.nations.Sweden, group.G.nations.England],
  },
  {
    date: new Date('2018-07-08 03:00:00'),
    nations: [group.A.nations.Russia, group.D.nations.Croatia],
  },
];
