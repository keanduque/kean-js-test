'use strict';
/* 
// OOP Prototypal Inheritance
///////////////////////////////////////////////
// Constructor Functions & the New Operator

// Note : Arrow function does not work for Constructor Functions, because it doesnt have this keyword.
//function Declarations & Expressions will only work for Constructor Function - not feature of JS, pattern of other dev.

const Person = function (firstName, birthYear) {
  console.log(this); //Person {}

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this inside the constructor - terrible for performance
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const kean = new Person('Kean', 1989); //instance of Person
console.log(kean); //Person {firstName: "Kean", birthYear: 1989}

// 1. a new empty object {} is created right away
// 2. function is called, the this keyword is the new empty object in step 1. this = {}
// 3. newly created object {} is linked to a prototype
// 4. function automatically returns that empty object {} from the beginning.

const cherry = new Person('Cherry', 1988);
const makubex = new Person('Makubex', 1980);

console.log(cherry, makubex);

console.log(kean instanceof Person);

///////////////////////////////////////////////
// Prototypes - Prototypal inheritance
// each every function in JS automatically has a property called Prototypes including the Constructors functions.

console.log(Person.prototype);
//prototype property
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
kean.calcAge();
cherry.calcAge();

console.log(kean.__proto__); //prototype - points to object prototype
console.log(kean.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(kean)); // true
console.log(Person.prototype.isPrototypeOf(cherry)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.species = 'HomoSapiens';
console.log(kean.species, cherry.species);

//finding property
console.log(kean.hasOwnProperty('firstName')); //true
console.log(kean.hasOwnProperty('species')); //true

console.log(Object.prototype); */
/* 
///////////////////////////////////////////////
// Prototypal inheritance on Built-in Objects

console.log(kean.__proto__);
// Object.prototype (top of prototype chain)
console.log(kean.__proto__.__proto__);
console.log(kean.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 6]; // new Array === []
console.log(arr.__proto__); //contains all array methods
console.log(arr.__proto__ === Array.prototype); //true

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  //   console.log(...new Set(this));
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
 */
/* 
///////////////////////////////////////////////
// ES6 Classes

// class expression
//const PersonClExp = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods - Methods will be added to .prototype property so that all property will have access to them.
  //prototypal inheritance
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  //useful in data validation
  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    //this.fullName; // will produce error : Maximum call stack size exceeded - because it has same name in property name
    console.log('name', name);
    if (name.includes(' ')) this._fullName = name;
    // convention
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
const hideo = new PersonCl('Hideo Kurokawa', 1989);
console.log(hideo);
hideo.calcAge();
console.log(hideo.age);

console.log(hideo.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

hideo.greet();

// 1. Classes are NOT hoisted, function declaration are hoisted meaning you can use them before they declared in the code.
// 2. Classes are first-class citizens - pass them into function and return them into functions. - special kind of function behind the scene.
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter Echevaria', 1965);

//PersonCl.hey();
 */
/* 
///////////////////////////////////////////////
// Getters & Setters - function to get and set value

const account = {
  owner: 'kean',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1);
  },
  // setter need 1 parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;

console.log(account.movements); */

/* ///////////////////////////////////////////////
// Static Methods

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this); // Object calling the method will be the this keyword inside of that function.
};

Person.hey(); // not inherited return the entire Person class
 */
/* 
///////////////////////////////////////////////
// Object.create - there are no prototype properties involved, and also no constructor functions, and no new operator.

//like a simple object literal
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  //nothing to do with that constructor functions
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven); // return brand new object empty and linked to the PersonProto {}
//bit weird
steven.name = 'Steven';
steven.birthYear = 1998;
steven.calcAge(); //39
console.log(steven); //{name: "Steven", birthYear: 1998}

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1960); //different on the constructor method
sarah.calcAge(); //77
console.log(sarah);
 */
/* 
///////////////////////////////////////////////
// Inheritance between "Classes" : Constructor Functions

//Object.create
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
// Student.prototype = Object.create(Person.prototype);

//Student.prototype = Person.prototype; // Bad process will point directly to Person not inherited the property

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const juju = new Student('Juju', 2020, 'Computer Science');
console.log(juju);
juju.introduce();
// juju.calcAge();

console.log(juju.__proto__);
console.log(juju.__proto__.__proto__);

console.log(juju instanceof Student); //true
console.log(juju instanceof Person); //false
console.log(juju instanceof Object); //true

//fixing the prototype to Student
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
 */
/* 
///////////////////////////////////////////////
// Inheritance between "Classes" : ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear); //Parent constructor
    this.course = course; // not mandatory
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  //overriding the method from the parent class first read from the prototype chain
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

//const kean = new StudentCl('Kean Duque', 1989); //this will work
const kean = new StudentCl('Kean Duque', 1989, 'Computer Science');
kean.introduce();
kean.calcAge();
 */
/* ///////////////////////////////////////////////
// Inheritance between "Classes" : Object.crete()
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  //nothing to do with that constructor functions
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const kean = Object.create(StudentProto);
kean.init('Kean', 1989, 'Computer Science');
kean.introduce();
kean.calcAge();
 */
///////////////////////////////////////////////
// Another Class Example
// Encapsulation : Protected Properties and Methods
// Encapsulation : Private Class Fields & Methods

// 8 new features
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin;
    // this._movements = []; //not truly private because this is convention
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  //Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved!`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods - useful to hide implementation details from the outside

  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Kean', 'USD', 1111);

// acc1._movements.push(250); //wrong to access the property bec of underscore
// acc1._movements.push(-150);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

//console.log(acc1.#movements); //Error : Private field '#movements' must be declared in an enclosing class
//console.log(acc1.#pin);
//console.log(acc1.#approveLoan(100)); //Error : Private field '#approveLoan' must be declared in an enclosing class
Account.helper();

///////////////////////////////////////////////
// Chaining Methods

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());
