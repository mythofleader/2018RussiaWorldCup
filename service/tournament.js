class Tournament {
  constructor(tournamentModel) {
    this.tournaments = tournamentModel;
  }

  getFirstDate() {
    return this.firstDate = this.tournaments[0].date;
  }

  getAllDates() {
    return this.tournaments.map(tournament => tournament.date);
  }

  getByDate(date) {
    if (!(date instanceof Date)) throw new TypeError('date');

    return this.tournaments
      .filter(tournament => tournament.date.toString() === date.toString())
      .map(({ date, nations, group, score = null }) => ({ date, nations, group, score }));
  }

  getFromStartToEndDate(startDate, endDate) {
    if (!(startDate instanceof Date)) throw new TypeError('startDate');
    if (!(endDate instanceof Date)) throw new TypeError('endDate');

    return this.tournaments
      .filter(({ date }) => date >= startDate && date < endDate)
      .map(({ date, nations, group, score = null }) => ({ date, nations, group, score }));
  }

  isFinish(date) {
    return date > this.tournaments[this.tournaments.length - 1].date;
  }
}


module.exports = Tournament;
