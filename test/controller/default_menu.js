const expect = require('chai').expect;
const sinon = require('sinon');
const DefaultMenuController = require('../../app/controller/default_menu');
const Helper = require('../../app/util/helper');
const KaKaoView = require('../../app/view/kakao');


describe('Controller DefaultMenuController Class', () => {
  beforeEach(() => {
    this.view = new KaKaoView();
    this.controller = new DefaultMenuController(this.view);
  });

  it('call getDefaultMenus', () => {
    // Given
    const expectResults = {};
    const mock = sinon.mock(this.view);
    const expectation = mock.expects('send');
    expectation.withExactArgs(this.controller.message, Helper.mainMenuNames).returns(expectResults);
    expectation.once();

    // When
    const result = this.controller.getDefaultMenus();

    // Result
    expect(result).to.equal(expectResults);
    expectation.verify();
    mock.restore();
  });
});