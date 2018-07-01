const expect = require('chai').expect;
const sinon = require('sinon');
const DefaultMenuController = require('../../app/controller/default_menu');
const LastMatchDatesController = require('../../app/controller/tournament_last_match_dates');
const MatchTablesDateController = require('../../app/controller/match_tables_date');
const MatchTablesGroupController = require('../../app/controller/match_tables_group');
const MatchTablesMenuController = require('../../app/controller/match_tables_menu');
const MatchTablesSubMenuController = require('../../app/controller/match_tables_sub_menu');
const TodayMatchController = require('../../app/controller/today_match');
const Router = require('../../app/router');


describe('Router Class', () => {
  describe('route', () => {
    beforeEach(() => {
      const defaultMenu = new DefaultMenuController();
      const lastMatchDates = new LastMatchDatesController();
      const matchTablesDate = new MatchTablesDateController();
      const matchTablesGroup = new MatchTablesGroupController();
      const matchTablesMenu = new MatchTablesMenuController();
      const matchTablesSubMenu = new MatchTablesSubMenuController();
      const todayMatch = new TodayMatchController();
      this.controller = {
        defaultMenu, lastMatchDates, matchTablesDate, matchTablesGroup,
        matchTablesMenu, matchTablesSubMenu, todayMatch,
      };
      this.router = new Router(this.controller);

    });

    it('call todayMatch getAllMatches', () => {
      // Given
      const path = '오늘경기 일정';
      const mock = sinon.mock(this.controller.todayMatch);
      const expectation = mock.expects('getAllMatches');
      expectation.once();

      // When
      this.router.route(path);

      // Result
      expectation.verify();
      mock.restore();
    });

    it('call lastMatchDates getAllDates', () => {
      // Given
      const path = '지난경기 결과';
      const mock = sinon.mock(this.controller.lastMatchDates);
      const expectation = mock.expects('getAllDates');
      expectation.once();

      // When
      this.router.route(path);

      // Result
      expectation.verify();
      mock.restore();
    });

    it('call matchTablesMenu getMenus', () => {
      // Given
      const path = '경기일정표';
      const mock = sinon.mock(this.controller.matchTablesMenu);
      const expectation = mock.expects('getMenus');
      expectation.once();

      // When
      this.router.route(path);

      // Result
      expectation.verify();
      mock.restore();
    });

    it('call matchTablesSubMenu getAllMatchDates', () => {
      // Given
      const path = '요일별';
      const mock = sinon.mock(this.controller.matchTablesSubMenu);
      const expectation = mock.expects('getAllMatchDates');
      expectation.once();

      // When
      this.router.route(path);

      // Result
      expectation.verify();
      mock.restore();
    });

    it('call matchTablesSubMenu getAllMatchGroups', () => {
      // Given
      const path = '그룹별';
      const mock = sinon.mock(this.controller.matchTablesSubMenu);
      const expectation = mock.expects('getAllMatchGroups');
      expectation.once();

      // When
      this.router.route(path);

      // Result
      expectation.verify();
      mock.restore();
    });

    it('call matchTablesDate getMatchByDate', () => {
      // Given
      const path = '06월 17일 일요일';
      const mock = sinon.mock(this.controller.matchTablesDate);
      const expectation = mock.expects('getMatchByDate');
      expectation.once();

      // When
      this.router.route(path);

      // Result
      expectation.verify();
      mock.restore();
    });

    it('call matchTablesGroup getMatchByGroup', () => {
      // Given
      const path = 'A';
      const mock = sinon.mock(this.controller.matchTablesGroup);
      const expectation = mock.expects('getMatchByGroup');
      expectation.once();

      // When
      this.router.route(path);

      // Result
      expectation.verify();
      mock.restore();
    });

    it('call defaultMenu getDefaultMenus', () => {
      // Given
      const path = '처음으로';
      const mock = sinon.mock(this.controller.defaultMenu);
      const expectation = mock.expects('getDefaultMenus');
      expectation.once();

      // When
      this.router.route(path);

      // Result
      expectation.verify();
      mock.restore();
    });
  });
});