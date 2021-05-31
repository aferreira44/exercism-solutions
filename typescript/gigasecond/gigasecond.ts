class Gigasecond {
  _date: Date;

  constructor(date: Date) {
    this._date = date;
  }

  date(): Date {
    const gigasecondDate = new Date(this._date);
    gigasecondDate.setSeconds(this._date.getSeconds() + Math.pow(10, 9));
    return gigasecondDate;
  }
}

export default Gigasecond;
