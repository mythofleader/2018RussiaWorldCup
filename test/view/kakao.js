const expect = require('chai').expect;
const KaKaoView = require('../../app/view/kakao');


describe('View KaKaoView Class', () => {
  describe('send', () => {
    beforeEach(() => {
      this.message = 'testMessage';
      this.buttons = ['testButton'];
      this.view = new KaKaoView();
    });

    it('return result when doesNeedMessageButton is false', () => {
      // Given
      const expectResult = {
        message: { text: this.message },
        keyboard: { type: 'buttons', buttons: this.buttons },
      };

      // When
      const result = this.view.send(this.message, this.buttons);

      // Result
      expect(result).to.deep.equal(expectResult);
    });

    it('return result when doesNeedMessageButton is true', () => {
      // Given
      const expectResult = {
        message: {
          text: this.message,
          message_button: this.view.messageButton,
        },
        keyboard: { type: 'buttons', buttons: this.buttons },
      };

      // When
      const result = this.view.send(this.message, this.buttons, true);

      // Result
      expect(result).to.deep.equal(expectResult);
    });
  });
});