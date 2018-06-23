const DefaultMenuController = require('./app/controller/default_menu');
const LastMatchDatesController = require('./app/controller/last_match_dates');
const MatchTablesDateController = require('./app/controller/match_tables_date');
const MatchTablesGroupController = require('./app/controller/match_tables_group');
const MatchTablesMenuController = require('./app/controller/match_tables_menu');
const MatchTablesSubMenuController = require('./app/controller/match_tables_sub_menu');
const TodayMatchController = require('./app/controller/today_match');

const TournamentData = require('./app/model/data/tournament');
const TournamentModel = require('./app/model/tournament');
const Router = require('./app/router');
const KaKaoTalkPlusView = require('./app/view/kakao');

const tournament = new TournamentModel(TournamentData);
const model = { tournament };
const view = new KaKaoTalkPlusView();
const defaultMenu = new DefaultMenuController(view);
const lastMatchDates = new LastMatchDatesController(view, model);
const matchTablesDate = new MatchTablesDateController(view, model);
const matchTablesGroup = new MatchTablesGroupController(view, model);
const matchTablesMenu = new MatchTablesMenuController(view);
const matchTablesSubMenu = new MatchTablesSubMenuController(view, model);
const todayMatch = new TodayMatchController(view, model);
const controller = {
  defaultMenu, lastMatchDates, matchTablesDate, matchTablesGroup,
  matchTablesMenu, matchTablesSubMenu, todayMatch,
};

const router = new Router(controller);
const main = async (event) => router.route(event.content);


exports.handler = main;
