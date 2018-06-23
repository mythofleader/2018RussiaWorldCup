const expect = require('chai').expect;
const TournamentModelData = require('../../app/model/data/tournament');
const TournamentModel = require('../../app/model/tournament');


describe('Model TournamentModel Class', () => {
  beforeEach(() => {
    this.model = new TournamentModel(TournamentModelData);
  });

  it('getFirstDate', () => {
    // Given
    const expectResult = new Date('2018-06-15 00:00:00');

    // When
    const result = this.model.getFirstDate();

    // Result
    expect(result.toString()).to.equal(expectResult.toString());
  });

  it('getAllDates', () => {
    // Given
    const expectResult = 48;

    // When
    const results = this.model.getAllDates();

    // Result
    expect(results.length).to.equal(expectResult);
  });

  it('getAllGroupNames', () => {
    // Given
    const expectResult = 8;

    // When
    const results = this.model.getAllGroupNames();

    // Result
    expect(results.length).to.equal(expectResult);
  });

  it('getFromStartToEndDate', () => {
    // Given
    const startDate = new Date('2018-06-15 00:00:00');
    const endDate = new Date('2018-06-16 00:00:00');
    const expectResults = 2;

    // When
    const results = this.model.getFromStartToEndDate(startDate, endDate);

    // Result
    expect(results.length).to.equal(expectResults);
  });

  it('getByGroupName', () => {
    // Given
    const groupName = 'A';
    const expectResults = 6;

    // When
    const results = this.model.getByGroupName(groupName);

    // Result
    expect(results.length).to.equal(expectResults);
  });

  describe('isFinish', () => {
    it('return true', () => {
      // Given
      const date = new Date('2018-06-29 22:12:11');

      // When
      const result = this.model.isFinish(date);

      // Result
      expect(result).to.equal(true);
    });

    it('return false', () => {
      // Given
      const date = new Date('2018-06-28 22:12:11');

      // When
      const result = this.model.isFinish(date);

      // Result
      expect(result).to.equal(false);
    });
  });
});