const expect = require('chai').expect;
const Router = require('../router');
const tournamentModel = require('../model/tournament');
const TournamentService = require('../service/tournament');


describe('Router', () => {
  beforeEach(() => {
    this.router = new Router({ tournament: new TournamentService(tournamentModel) });
  });

  describe('hasMenu', () => {
    it('return true', () => {
      //  Given
      const mainMenus = ['오늘경기 일정', '지난경기 결과', '경기일정표'];
      const expectResult = true;

      // When
      for (const mainMenu of mainMenus) {
        const result = this.router.hasMenu(mainMenu);

        // Result
        expect(result).to.deep.equal(expectResult);
      }
    });

    it('return false', () => {
      //  Given
      const notMainMenus = ['오늘경기 일정s', '지난경기 결과s', '경기일정표s'];
      const expectResult = false;

      // When
      for (const notMainMenu of notMainMenus) {
        const result = this.router.hasMenu(notMainMenu);

        // Result
        expect(result).to.deep.equal(expectResult);
      }
    });
  });

  describe('getTodayMatchInfo', () => {
    it('return no match info', () => {
      // Given
      const todayDate = new Date('2018-06-14 00:00:00');
      const expectMessage = '06월 14일 목요일 경기 일정\n경기 일정이 없습니다.';
      // When
      const result = this.router.getTodayMatchInfo(todayDate);

      // Result
      expect(result.message.text).to.equal(expectMessage);
    });

    it('return match info', () => {
      // Given
      const todayDate = new Date('2018-06-15 00:00:00');
      const expectMessage = '06월 15일 금요일 경기 일정\n00시 A조 러시아(5) vs 사우디아라비아(0)\n21시 A조 이집트(0) vs 우루과이(1)';
      // When
      const result = this.router.getTodayMatchInfo(todayDate);

      // Result
      expect(result.message.text).to.equal(expectMessage);
    });
  });

  describe('getLastMatchInfo', () => {
    it('return no match info', () => {
      // Given
      const todayDate = new Date('2018-06-14 00:00:00');
      const expectMessage = '경기 결과가 없습니다.';
      // When
      const result = this.router.getLastMatchInfo(todayDate);

      // Result
      expect(result.message.text).to.equal(expectMessage);
    });

    it('return match info', () => {
      // Given
      const todayDate = new Date('2018-06-17 00:00:00');
      const expectMessage = '06월 15일 금요일 경기 일정\n' +
        '00시 A조 러시아(5) vs 사우디아라비아(0)\n' +
        '21시 A조 이집트(0) vs 우루과이(1)\n' +
        '\n' +
        '06월 16일 토요일 경기 일정\n' +
        '00시 B조 모로코(0) vs 이란(1)\n' +
        '03시 B조 포르투갈(3) vs 스페인(3)\n' +
        '19시 C조 프랑스(2) vs 호주(1)\n' +
        '22시 D조 아르헨티나(1) vs 아이슬란드(1)';
      // When
      const result = this.router.getLastMatchInfo(todayDate);

      // Result
      expect(result.message.text).to.equal(expectMessage);
    });
  });

  it('getAllMatchDates', () => {
    // Given
    const expectResults = [
      "06월 15일 금요일",
      "06월 16일 토요일",
      "06월 17일 일요일",
      "06월 18일 월요일",
      "06월 19일 화요일",
      "06월 20일 수요일",
      "06월 21일 목요일",
      "06월 22일 금요일",
      "06월 23일 토요일",
      "06월 24일 일요일",
      "06월 25일 월요일",
      "06월 26일 화요일",
      "06월 27일 수요일",
      "06월 28일 목요일",
      "06월 29일 금요일",
    ];

    // When
    const matchDates = this.router.getAllMatchDates();

    // Result
    expect(matchDates.keyboard).to.deep.equal(expectResults);
  });
});
