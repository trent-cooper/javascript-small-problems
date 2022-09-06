// Write a program to determine whether a triangle is equilateral, isosceles or scalene.

// input: Constructor object with private methods for verficiation
// output: Triangle type object with .type() method returning triangle type as string

// algo:
//    Create Triangle class
//    Check input:
//      All sides integer values?
//      All sides greater than 0?
//      Sum of any 2 sides greater than 3rd?
//    If any false, return invalid message
//    If all true, check for triangle type:
//      equilateral: all 3 integers ===
//      isosceles: 2 integers ===, 3rd !==
//      scalene: all sides !==
//    Return type as string

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (!this.checkValid()) {
      throw new Error();
    }
  }

  type() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return 'equilateral';
    }

    if ((this.side1 === this.side2 && this.side2 !== this.side3) ||
        (this.side2 === this.side3 && this.side2 !== this.side1) ||
        (this.side1 === this.side3 && this.side1 !== this.side2)) {
      return 'isosceles';
    }

    return 'scalene';
  }

  checkValid() {
    if (!this.allSidesInt() || !this.allSidesNonZero() || !this.twoSidesGreaterThan()) {
      return false;
    }

    return true;
  }

  allSidesInt() {
    if (!Number.isNaN(this.side1) &&
        !Number.isNaN(this.side2) &&
        !Number.isNaN(this.side3)) {
          return true;
        }

    return false;
  }

  allSidesNonZero() {
    if (this.side1 > 0 &&
        this.side2 > 0 &&
        this.side3 > 0) {
          return true;
        }
    
    return false;
  }

  twoSidesGreaterThan() {
    if ((this.side1 + this.side2) > this.side3 &&
        (this.side2 + this.side3) > this.side1 &&
        (this.side1 + this.side3) > this.side2) {
          return true;
        }
        
    return false
  }
}

// let equi = new Triangle(30, 30, 30);
// let isos = new Triangle(20, 20, 10);
// let scal = new Triangle(15, 30, 10);
// let test = new Triangle(0, 2, 3);

// console.log(equi.type());
// console.log(isos.type());
// console.log(scal.type());

module.exports = Triangle;

