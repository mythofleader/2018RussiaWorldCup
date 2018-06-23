const expect = require('chai').expect;
const sinon = require('sinon');
const LastMatchDatesController = require('../../app/controller/last_match_dates');
const TournamentModelData = require('../../app/model/data/tournament');
const TournamentModel = require('../../app/model/tournament');
const Helper = require('../../app/util/helper');
const KaKaoView = require('../../app/view/kakao');


describe('Controller LastMatchDatesController Class', () => {
  beforeEach(() => {
    this.model = new TournamentModel(TournamentModelData);
    this.view = new KaKaoView();
    this.controller = new LastMatchDatesController(this.view, { tournament: this.model });
  });

  describe('getAllDates', () => {
    it ('return message: not exist', () => {
      // Given
      const modelMock = sinon.mock(this.model);
      const firstDateExpectation = modelMock.expects('getFirstDate');
      const firstTournamentDate = TournamentModelData[0].date;
      firstDateExpectation.returns(firstTournamentDate);
      firstDateExpectation.once();

      const tomorrowStartDate = Helper.getTomorrowStartDate();
      const lastMatchExpectation = modelMock.expects('getFromStartToEndDate');
      lastMatchExpectation.withExactArgs(firstTournamentDate, tomorrowStartDate).returns([]);
      lastMatchExpectation.once();

      const buttons = Helper.defaultMenuNames;
      const expectResult = 'not exist';
      const viewMock = sinon.mock(this.view);
      const viewExpectation = viewMock.expects('send');
      viewExpectation.withExactArgs(this.controller.message.notExist, buttons).returns(expectResult);
      viewExpectation.once();

      // When
      const result = this.controller.getAllDates();

      // Result
      expect(result).to.equal(expectResult);
      firstDateExpectation.verify();
      lastMatchExpectation.verify();
      viewExpectation.verify();
    });

    it ('return message: exist', () => {
      // Given
      const modelMock = sinon.mock(this.model);
      const firstDateExpectation = modelMock.expects('getFirstDate');
      const firstTournamentDate = TournamentModelData[0].date;
      firstDateExpectation.returns(firstTournamentDate);
      firstDateExpectation.once();

      const tomorrowStartDate = Helper.getTomorrowStartDate();
      const lastMatchExpectation = modelMock.expects('getFromStartToEndDate');
      lastMatchExpectation.withExactArgs(firstTournamentDate, tomorrowStartDate).returns([{
        date: new Date('2018-06-15 21:00:00'),
        group: 'A',
        nations: ['이집트', '우루과이'],
        score: [0, 1],
      }]);
      lastMatchExpectation.once();

      const buttons = ['06월 15일 금요일'].concat(Helper.defaultMenuNames);
      const expectResult = 'exist';
      const viewMock = sinon.mock(this.view);
      const viewExpectation = viewMock.expects('send');
      viewExpectation.withExactArgs(this.controller.message.exist, buttons).returns(expectResult);
      viewExpectation.once();

      // When
      const result = this.controller.getAllDates();

      // Result
      expect(result).to.equal(expectResult);
      firstDateExpectation.verify();
      lastMatchExpectation.verify();
      viewExpectation.verify();
    });
  });
});