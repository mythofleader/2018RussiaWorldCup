const MainController = require('./controller/main');
const SubController = require('./controller/sub');
const tournamentModel = require('./model/tournament');
const Menu = require('./router/menu');
const TournamentService = require('./service/tournament');

const tournamentService = new TournamentService(tournamentModel);
const mainController = new MainController({ tournament: tournamentService });
const subController = new SubController({ tournament: tournamentService });
const menu = new Menu({ main : mainController, sub: subController });
const main = async (event) => menu.getData(event.content);


exports.handler = main;
