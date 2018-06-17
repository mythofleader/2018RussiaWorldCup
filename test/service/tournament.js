const expect = require('chai').expect;
const tournamentModel = require('../../model/tournament');
const TournamentService = require('../../service/tournament');


describe('TournamentService', () => {
  beforeEach(() => {
    this.service = new TournamentService(tournamentModel);
  });

  describe('getAllDates', () => {
    it('return all dates', () => {
      // When
      const dates = this.service.getAllDates();

      // Result
      expect(dates.length).to.equal(48);
    });
  });

  describe('getByDate', () => {
    it ('raise date type error', () => {
      // Given
      const date = '2018-05-13 11:12:11';

      try {
        this.service.getByDate(date);
      } catch (e) {
        expect(e instanceof TypeError).to.equal(true);
        expect(e.message).to.equal('date');
      }
    });

    it('return empty array when date is not exists', () => {
      //  Given
      const date = new Date('2018-05-03 11:23:11');
      const expectResults = [];

      // When
      const tournaments = this.service.getByDate(date);

      // Result
      expect(tournaments).to.deep.equal(expectResults);
    });

    it('return tournaments', () => {
      // Given
      const date = new Date('2018-06-15 00:00:00');
      const expectResultCnt = 1;

      // When
      const tournaments = this.service.getByDate(date);

      // Result
      expect(tournaments.length).to.equal(expectResultCnt);
    });
  });

  describe('getFromStartToEndDate', () => {
    it ('raise startDate type error', () => {
      // Given
      const date = '2018-05-13 11:12:11';

      try {
        // When
        this.service.getFromStartToEndDate(date);
      } catch (e) {
        // Result
        expect(e instanceof TypeError).to.equal(true);
        expect(e.message).to.equal('startDate');
      }
    });

    it ('raise endDate type error', () => {
      // Given
      const startDate = new Date('2018-05-13 11:12:11');
      const endDate = '2018-05-13 11:12:11';

      try {
        // When
        this.service.getFromStartToEndDate(startDate, endDate);
      } catch (e) {
        // Result
        expect(e instanceof TypeError).to.equal(true);
        expect(e.message).to.equal('endDate');
      }
    });

    it('return empty array when is not filtered by startDate, endDate', () => {
      // Given
      const startDate = new Date('2018-05-06 11:12:32');
      const endDate = new Date('2018-05-08 14:12:11');
      const expectResult = 0;

      // When
      const results = this.service.getFromStartToEndDate(startDate, endDate);

      // Result
      expect(results.length).to.equal(expectResult);
    });

    it('return 2 tournaments', () => {
      // Given
      const startDate = new Date('2018-06-14 11:12:32');
      const endDate = new Date('2018-06-15 23:12:11');
      const expectResult = 2;

      // When
      const results = this.service.getFromStartToEndDate(startDate, endDate);

      // Result
      expect(results.length).to.equal(expectResult);
    });
  });

  describe('isFinish', () => {
    it('return true', () => {
      // Given
      const date = new Date('2018-07-04 11:23:11');
      const expectResult = true;

      // When
      const isFinish = this.service.isFinish(date);

      // Result
      expect(isFinish).to.equal(expectResult);
    });

    it('return false', () => {
      // Given
      const date = new Date('2018-06-16 11:23:11');
      const expectResult = false;

      // When
      const isFinish = this.service.isFinish(date);

      // Result
      expect(isFinish).to.equal(expectResult);
    });
  });
});
