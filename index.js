const MainController = require('./controller/main');
const SubController = require('./controller/sub');
const tournamentModel = require('./model/tournament');
const Menu = require('./router/menu');
const TournamentService = require('./service/tournament');

const tournamentService = new TournamentService(tournamentModel);
const main = new MainController({ tournament: tournamentService });
const sub = new SubController({ tournament: tournamentService });
const menu = new Menu({ main, sub });


exports.handler = async (event) => menu.getData(event.content);
