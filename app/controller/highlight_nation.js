const GroupData = require('../model/data/group');
const Round8Data = require('../model/data/round8');
const Round16Data = require('../model/data/round16');
const TournamentData = require('../model/data/tournament');
const Helper = require('../util/helper');


class HighLights {
  constructor(view) {
    this.view = view;
    this.message = '국가를 선택해 주세요.';
    this.setNations();
  }

  setNations() {
    const result = new Set();

    const groups = Object.keys(GroupData);
    for (const group of groups) {
      const nations = GroupData[group].nations;
      const nationKeys = Object.keys(nations);
      for (const nationKey of nationKeys) {
        const nation = nations[nationKey];
        result.add(nation);
      }
    }

    const nations = [...result];
    nations.sort();
    this.nations = nations;
  }

  hasNation(nation) {
    return this.nations.includes(nation);
  }

  getNations() {
    return this.view.send(this.message, this.nations.concat(Helper.defaultMenuNames));
  }

  getByNation(selectedNation) {
    const result = new Map();

    const groups = Object.keys(GroupData);
    for (const group of groups) {
      const nations = GroupData[group].nations;
      const nationKeys = Object.keys(nations);
      for (const nationKey of nationKeys) {
        const nation = nations[nationKey];
        if (nation === selectedNation) {
          const tournamentHighlights = HighLights.filterHighlightInfo(TournamentData, nation);
          const round16Highlights = HighLights.filterHighlightInfo(Round16Data, nation);
          const round8Highlights = HighLights.filterHighlightInfo(Round8Data, nation);
          result.set(nation, tournamentHighlights.concat(round16Highlights).concat(round8Highlights));
        }
      }
    }

    let headers = `${selectedNation} 하이라이트\n\n`;
    let body = [];
    for (const [_, matches] of result) {
      for (const { date, nations, score, highlight } of matches) {
        const [home, away] = nations;
        const [homeScore, awayScore] = score;
        let temp = `결과: ${home}(${homeScore}) vs ${away}(${awayScore})\n`;
        temp += `경기일자: ${Helper.convertKoreanDate(date)}\n`;
        temp += `하이라이트: ${highlight}\n`;
        body.push(temp);
      }
    }

    const message = headers + body.join('\n');
    const buttons = Helper.mainMenuNames;
    return this.view.send(message, buttons);
  }

  static filterHighlightInfo(matches, nation) {
    return matches
      .filter(match => match.nations.includes(nation) && match.score && match.highlight)
      .map(({ date, nations, score, highlight }) => ({ date, nations, score, highlight }));
  }
}


module.exports = HighLights;
