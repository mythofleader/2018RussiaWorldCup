class Response {
  static send(message, buttons) {
    return {
      message : { text : message },
      keyboard: { type: 'buttons', buttons }
    };
  }
}


module.exports = Response;
