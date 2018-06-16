exports.handler = async (event) => {
  return {
    "message" : { "text" : "서비스 준비중 입니다. 곧 찾아 뵐께요!" },
    "keyboard": {
      "type": "buttons",
      "buttons": ["봇 사용법", "오늘경기 일정", "지난경기 결과", "대진표"]
    }
  };
};
