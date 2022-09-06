class Robot {
  constructor() {
    this.nameRand = this.newName();
    Robot.Assigned.push(this.nameRand);
  }

  static Assigned = [];
  static CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  name() {
    return this.nameRand;
  }

  reset() {
    this.nameRand = this.newName();
  }

  newName() {
    let name = this.createName();

    while (true) {
      if (Robot.Assigned.indexOf(name) === -1) break;
      
      name = this.createName();
    }

    return name;
  }

  randChar() {
    let idx = Math.floor(Math.random() * 26);
    return Robot.CHARS[idx];
  }

  randNum() {
    let num = Math.floor(Math.random() * 10);
    return String(num);
  }

  createName() {
    return this.randChar() + this.randChar() + this.randNum() + this.randNum() + this.randNum();
  }
}

let test = new Robot();
console.log(test.name());

module.exports = Robot;