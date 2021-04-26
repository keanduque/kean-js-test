'use strict';

//////////////////////////////
// OOP
// Coding Challenge #2

/*

Your tasks:

    1. Re-create Challenge #1, but this time using an ES6 clas (call it 'CarCl')

    2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
    
    3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
    
    4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

Test data:
    § Data car 1: 'Ford' going at 120 km/h


*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;

    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(this.speed);
  }
}

const car1 = new CarCl('Ford', 120);
console.log(car1);
console.log('speedUS', car1.speedUS);
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.break();
car1.break();
car1.speedUS = 50;
// console.log(car1);
car1.accelerate();
car1.break();
