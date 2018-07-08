const group = require('./group');


module.exports = [
  {
    date: new Date('2018-07-11 03:00:00'),
    nations: [group.C.nations.France, group.G.nations.Belguim],
  },
  {
    date: new Date('2018-07-12 03:00:00'),
    nations: [group.D.nations.Croatia, group.G.nations.England],
  },
];
