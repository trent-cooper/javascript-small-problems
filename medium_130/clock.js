class Clock {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }

  toString() {
    let hourStr = String(this.hour);
    let minuteStr = String(this.minute);

    if (this.hour < 10) hourStr = ('0' + hourStr);
    if (this.minute < 10) minuteStr = ('0' + minuteStr);

    return `${hourStr}:${minuteStr}`;
  }

  add(mins) {
    let hours = Math.floor(mins / 60);
    let minutes = mins % 60;

    this.addHour(hours);
    this.addMinute(minutes);

    return this;
  }

  subtract(mins) {
    let hours = Math.floor(mins / 60);
    let minutes = mins % 60;
    
    this.subHour(hours);
    this.subMinute(minutes);

    return this;
  }

  addHour(hours) {
    for (let count = 0; count < hours; count++) {
      this.hour += 1;

      if (this.hour === 24) {
        this.hour = 0;
      }

    }
  }

  subHour(hours) {
    for (let count = 0; count < hours; count++) {

      if (this.hour === 0) {
        this.hour = 24;
      }

      this.hour -= 1;
      
    }
  }

  addMinute(mins) {
    if (this.minute + mins >= 60) {
      mins -= (60 - this.minute);
      this.addHour(1);
      this.minute = 0;
    }

    this.minute += mins;
  }

  subMinute(mins) {
    if (this.minute - mins < 0) {
      mins = mins - this.minute;
      this.subHour(1);
      this.minute = 60;
    }

    this.minute -= mins;
  }

  isEqual(clockObj) {
    return (this.minute === clockObj.minute) && (this.hour === clockObj.hour)
  }

}

module.exports = Clock;