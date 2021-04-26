'use strict';

/* //Scoping Practice :
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    //block scoped only const and let are available
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; //function scoped will work outside this scope.
      const firstName = 'Cherry'; //when change to var it's undefined

      //re-assigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        //work only for this scope
        return a + b;
      }
    }
    //console.log(str) //Uncaught ReferenceError: str is not defined
    console.log(millenial);
    //console.log(add(2, 3)); //str is not defined / will work on not strict mode.
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Kean';
calcAge(1991);

//console.log(test); // can't access lexical declaration 'test' before initialization
//let test = 'testing';

//console.log(age); //Uncaught ReferenceError: age is not defined
//console.log(printAge()); //Uncaught ReferenceError: printAge is not defined

 */

// Hoisting
//Variables
/* console.log(me); //undefined
//Temporal Dead Zone (TDZ)
//console.log(job); //can't access lexical declaration 'job' before initialization
//console.log(year); //can't access lexical declaration 'year' before initialization

var me = 'Kean';
let job = 'programmer';
const year = 1991;

//Functions

console.log(addDecl(2, 3));
//console.log(addExpr(2, 3)); //can't access lexical declaration 'addExpr' before initialization
console.log(addArrow); //undefined when using var
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example
console.log('numPrducts', numPrducts);
if (!numPrducts) deleteShoppingCart();

var numPrducts = 10; //dont use var to avoid bugs

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
 */

//This Keyword

// console.log(this); // window parent

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

/* const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // getting the lexical parent this
};
calcAgeArrow(1980);

const kean = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
kean.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = kean.calcAge; // method borrowing
matilda.calcAge();

const f = kean.calcAge;

//console.log(f());

const Car = {
  wheels: 4,
  steering: 1,
  gasPedal: function () {
    console.log('Accelerate');
  },
};

const ecoCar = {
  battery: 1,
};

ecoCar.gasPedal = Car.gasPedal;
ecoCar.gasPedal();
 */

//Regular Functions vs Arrow Functions :

//object literals not function block
//var firstName = 'Matilda';

/* const kean = {
  firstName: 'Kean',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //solution 1 use extra value using self = this
    // const self = this; // self or that;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //console.log(this.year >= 1981 && this.year <= 1996);

    //   const test = () => {
    //     console.log(self);
    //   };
    //   test();
    // };

    //solution 2 create arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this); // print window object not the kean this
    console.log(`Hey ${this.firstName}`); //undefined because of the arrow function
  },
};
kean.greet();
kean.calcAge();
 */

// const firstName = 'Cherry';

/* const kean = {
  firstName: 'Kean',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1 ES6 solution
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year);
    // };

    //Solution 2
    const isMillenial = () => console.log(this.year >= 1981 && this.year);

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
kean.greet();
kean.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments); // arguments will work only for regular functions not in arrow functions.
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 12); */

// var addArrow = (a, b) => {
//   console.log(arguments); //this will not work in arrow functions
//   return a + b;
// };
// addArrow(2, 5);

/* function FuncDeclaration(a, b) {
  console.log(arguments);
  return a + b;
}
FuncDeclaration(2, 5, 2, 6);
 */

//Primitive vs Object

/* let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Kean',
  age: 32,
};

const friend = me;
friend.age = 24;
friend.name = 'Pochi';
console.log('Friend', friend);
console.log('Me', me);
 */

//Primitive Types
/* let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage : ', jessica);
console.log('After Marriage : ', marriedJessica);

//Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'WIlliams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //only create a shallow copy not a deep clone. only copy the properties.
jessicaCopy.lastName = 'Davis';
console.log('xBefore Marriage : ', jessica2);
console.log('xAfter Marriage : ', jessicaCopy);
jessicaCopy.family.push('Mark');
jessicaCopy.family.push('Pochi');
console.log(jessica2.family);
console.log(jessicaCopy.family);
 */
