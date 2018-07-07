const DefaultMenuController = require('./app/controller/default_menu');
const HighLightsController = require('./app/controller/highlight_nation');
const LastMatchResultMenu = require('./app/controller/last_match_menu');
const MatchTablesDateController = require('./app/controller/match_tables_date');
const MatchTablesGroupController = require('./app/controller/match_tables_group');
const MatchTablesMenuController = require('./app/controller/match_tables_menu');
const MatchTablesRound8Controller = require('./app/controller/match_tables_round8');
const MatchTablesRound16Controller = require('./app/controller/match_tables_round16');
const MatchTablesSubMenuController = require('./app/controller/match_tables_sub_menu');
const Round8LastMatchDatesController = require('./app/controller/round8_last_match_dates');
const Round16LastMatchDatesController = require('./app/controller/round16_last_match_dates');
const TodayMatchController = require('./app/controller/today_match');
const TournamentLastMatchDatesController = require('./app/controller/tournament_last_match_dates');

const TournamentData = require('./app/model/data/tournament');
const TournamentModel = require('./app/model/tournament');
const Round16Data = require('./app/model/data/round16');
const Round16Model = require('./app/model/round16');
const Round8Data = require('./app/model/data/round8');
const Round8Model = require('./app/model/round8');
const Router = require('./app/router');
const KaKaoTalkPlusView = require('./app/view/kakao');

const tournament = new TournamentModel(TournamentData);
const round16 = new Round16Model(Round16Data);
const round8 = new Round8Model(Round8Data);
const model = { tournament, round16, round8 };
const view = new KaKaoTalkPlusView();
const defaultMenu = new DefaultMenuController(view);
const highLights = new HighLightsController(view);
const lastMatchResultMenu = new LastMatchResultMenu(view);
const matchTablesDate = new MatchTablesDateController(view, model);
const matchTablesGroup = new MatchTablesGroupController(view, model);
const matchTablesRound8 = new MatchTablesRound8Controller(view, model);
const matchTablesRound16 = new MatchTablesRound16Controller(view, model);
const matchTablesMenu = new MatchTablesMenuController(view);
const matchTablesSubMenu = new MatchTablesSubMenuController(view, model);
const round8LastMatchDates = new Round8LastMatchDatesController(view, model);
const round16LastMatchDates = new Round16LastMatchDatesController(view, model);
const todayMatch = new TodayMatchController(view, model);
const tournamentLastMatchDates = new TournamentLastMatchDatesController(view, model);

const controller = {
  defaultMenu, lastMatchResultMenu, matchTablesDate, matchTablesGroup, matchTablesRound16,
  matchTablesMenu, matchTablesSubMenu, round16LastMatchDates, todayMatch, tournamentLastMatchDates,
  matchTablesRound8, round8LastMatchDates, highLights,
};

const router = new Router(controller);
const main = async (event) => router.route(event.content);


exports.handler = main;
