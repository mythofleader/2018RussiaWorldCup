class Response {
  static send(message, buttons) {
    return {
      message : { text : message },
      keyboard: buttons
    };
  }
}


module.exports = Response;
