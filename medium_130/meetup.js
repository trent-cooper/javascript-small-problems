class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  day(weekday, schedule) {
    return this.getDay(weekday, schedule);
  }

  getDay(weekday, schedule) {
    let dayMatch = this.convertDay(weekday);
    let sched = this.convertSchedule(schedule);
    let matchArr = [];

    for (let day = 0; day <= 31; day++) {
      let date = new Date(`${this.month} ${day}, ${this.year}`);
      if (date.getMonth() + 1 !== this.month) continue;
      
      if (date.getDay() === dayMatch) {
        matchArr.push(date);
      }
    }

    let match;

    if (!isNaN(sched)) {
      match = matchArr[sched];
    } else if (sched === 'last') {
      match = matchArr[matchArr.length - 1];
    } else {
      match = this.findTeenth(matchArr);
    }

    return (match) ? match : null;
  }

  convertDay(weekday) {
    let day = weekday.toLowerCase();

    switch (day) {
      case 'sunday' :
        return 0;
      case 'monday' :
        return 1;
      case 'tuesday' :
        return 2;
      case 'wednesday' :
        return 3;
      case 'thursday' :
        return 4;
      case 'friday' :
        return 5;
      case 'saturday' :
        return 6;
    }
  }

  convertSchedule(schedule) {
    let sched = schedule.toLowerCase();

    switch (sched) {
      case 'first' :
        return 0;
      case 'second' :
        return 1;
      case 'third' :
        return 2;
      case 'fourth' :
        return 3;
      case 'fifth' :
        return 4;
      case 'last' :
        return 'last';
      case 'teenth' :
        return 'teenth';
    }
  }

  findTeenth(arr) {
    let teenthArr = arr.filter(date => {
      return [13, 14, 15, 16, 17, 18, 19].includes(date.getDate());
    });

    return teenthArr[0];
  }
}

module.exports = Meetup;