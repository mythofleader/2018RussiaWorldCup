class TournamentModel {
  constructor(tournamentData) {
    this.tournamentData = tournamentData;
  }

  getFirstDate() {
    return this.firstDate = this.tournamentData[0].date;
  }

  getAllDates() {
    return [...new Set(this.tournamentData.map(tournament => tournament.date))];
  }

  getAllGroupNames() {
    return [...new Set(this.tournamentData.map(({ group }) => group))];
  }

  getFromStartToEndDate(startDate, endDate) {
    return this.tournamentData
      .filter(({ date }) => date >= startDate && date < endDate)
      .map(({ date, nations, group, score = null, highlight = null }) => ({ date, nations, group, score, highlight }));
  }

  getByGroupName(groupName) {
    return this.tournamentData
      .filter(({ group }) => group === groupName)
      .map(({ date, nations, group, score = null, highlight = null }) => ({ date, nations, group, score, highlight }));
  }

  isFinish(date) {
    return date > this.tournamentData[this.tournamentData.length - 1].date;
  }
}


module.exports = TournamentModel;
