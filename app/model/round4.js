class Round4 {
  constructor(data) {
    this.data = data;
  }

  getFirstDate() {
    return this.firstDate = this.data[0].date;
  }

  getAllDates() {
    return [...new Set(this.data.map(round16 => round16.date))];
  }

  getAll() {
    return this.data;
  }

  getFromStartToEndDate(startDate, endDate) {
    return this.data
      .filter(({ date }) => date >= startDate && date < endDate)
      .map(({ date, nations, score = null, highlight = null }) => ({ date, nations, score, highlight }));
  }

  isFinish(date) {
    return date > this.data[this.data.length - 1].date;
  }
}


module.exports = Round4;
