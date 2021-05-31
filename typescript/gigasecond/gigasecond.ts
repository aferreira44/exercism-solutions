class Gigasecond {
  startDate: Date;

  constructor(date: Date) {
    this.startDate = date;
  }

  date(): Date {
    const gigasecondDate = new Date(this.startDate);
    gigasecondDate.setSeconds(this.startDate.getSeconds() + Math.pow(10, 9));
    return gigasecondDate;
  }
}

export default Gigasecond;
