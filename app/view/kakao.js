class KaKaoView {
  constructor() {
    this.messageButton = {
      label: "전체 하이라이트 보러가기",
      url: "https://bit.ly/2yqdq2I"
    };
  }

  /*
   * @param {String} message
   * @param {Array<String>} buttons
   * @param {Boolean} doesNeedMessageButton
   * @return {Object} result
   */
  send(message, buttons, doesNeedMessageButton = false) {
    const result = {
      message: { text: message },
      keyboard: { type: 'buttons', buttons },
    };

    if (doesNeedMessageButton) result.message.message_button = this.messageButton;

    return result;
  }
}


module.exports = KaKaoView;
