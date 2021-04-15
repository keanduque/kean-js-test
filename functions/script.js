"use strict";

/* 
//////////////////////////////
//Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
 */

/* 
//////////////////////////////
//Passing Arguments works : value vs. Reference

const flight = "LH234";
const kean = {
  name: "Kean Duque",
  passport: "A2471234",
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === "A2471234") {
    alert("Checked In");
  } else {
    alert("Wrong Passport!");
  }
};

// checkIn(flight, kean);
// console.log(flight);
// console.log(kean);

// Is the same as doing...
// const flightNum = flight; // passing primitive type is same as creating a copy
// const passenger = kean; // when pass an object to a function, copying the reference to that object in the memory heap. copying object.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
  console.log(person.passport);
};

//interaction of different functions of object
newPassport(kean);
checkIn(flight, kean);

//In JS doest not passing by reference only passing by value.
//we do pass a reference so the memory address of the obj. that reference itself is still a value. it simply a value that contains a memory address. basically we pass a reference to the function, but do not pass by reference. - Pass by Reference */

/* 
//////////////////////////////
//Functions Returning Functions

//Level of Abstractions - hide the details of code implementation. because we dont really care about details.

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// Higher-order function - call-back function fn
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
//-------------------------

transformer("JavaScript is the best!", upperFirstWord);
transformer("JavaScript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);

["Kean", "Cherry", "Yama"].forEach(high5);

const animalSound = function (animal) {
  let sound = "";
  switch (animal) {
    case "dog":
      sound = "Aw";
      break;
    case "cat":
      sound = "Meow";
      break;
    case "goat":
      sound = "Meeeeeee";
      break;
    default:
      sound = "toooooooot!";
      break;
  }
  return sound + " ";
};
const caller = function (animal, rep, fn) {
  console.log(`${fn(animal).repeat(rep)}`);
};

caller("dog", 5, animalSound);
caller("cat", 10, animalSound);
caller("goat", 3, animalSound);
caller("frog", 3, animalSound); */

/* 
//////////////////////////////
//Functions accepting Callback functions

const greet = function (greeting) {
  return function (name) {
    //greeterHey
    console.log(`${greeting} ${name}`);
  };
};
//greeterHey is now function now.
const greeterHey = greet("Hey");
greeterHey("Kean");
greeterHey("Cherry");

greet("Hello")("Kean");

const greet2 = (greeting) => (name) => (verb) => {
  console.log(`${greeting} ${name} Please ${verb}!`);
};
const greetCmd = greet2("Preey")("Kyrie");
greetCmd("Basketball");

greet2("Uyy!")("Kean")("Dance"); */
/*  */
//////////////////////////////
//The Call and Apply Methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
/*
// lufthansa.book(239, "Kean Duque");
// lufthansa.book(635, "Cherry Joy");
// console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
//book(23, "Zen Makubex"); //Does not work

// CALL Method - is to call function and different this keyword
book.call(eurowings, 23, "Zen Makubex"); //Zen Makubex booked a seat on Eurowings flight EW23
// console.log(eurowings);

book.call(lufthansa, 239, "Dennis Rodman"); //Dennis Rodman booked a seat on Lufthansa flight LH239
// console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};
book.call(swiss, 421, "Jason Statham");

const cebuPac = {
  airline: "Cebu Pacific Airlines",
  iataCode: "CEB",
  bookings: [],
};

book.call(cebuPac, 505, "Willie Revillame"); //Willie Revillame booked a seat on Cebu Pacific Airlines flight CEB505

// APPLY Method - not receive a list of arguments after this keyword. but instead it gonna take an array
// not used anymore in modern JS

const flightData = [583, "Robin Padilla"];
book.apply(cebuPac, flightData);
// console.log(cebuPac);

//same as apply only use Spread out in the array
book.call(cebuPac, ...flightData);

//////////////////////////////
//The Bind Method - not immediately call a function instead it returns a new function were the this keyword is bound.
//pass a function

//book.call(eurowings, 23, "Zen Makubex");
const bookEW = book.bind(eurowings);
const bookCP = book.bind(cebuPac);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
// bookEW(23, "Steven Williams");
// bookCP(527, "Rodrigo Duterte");

const bookEW23 = book.bind(eurowings, 23);
// bookEW23("Kean Duque");
// bookEW23("Cherry Joy");

//Partial application - preset parameters

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = (value) => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));

//function mode

const addTax2 = (rate) => (value) => value + value * rate;
const addVAT2 = addTax2(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));
*/
//with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);

  this.tawag();
};
lufthansa.tawag = function () {
  console.log("Tawag ka!!");
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
/* 
//////////////////////////////
//Immediately Invoked Function Expressions (IIFE) - only executed once

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

//IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

(() => console.log("This arrow function will never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate); */

//////////////////////////////
//Closures - not feature we explicitly use, it happens automatcically
//Closure makes a function remember all the variables that existed at functions birthplace.
/* 
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++; // remember this variable where created
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker(); */

//console.dir(booker);

//more example for CLosures :
/* 
//Example 1
let f;

const g = function () {
  const a = 23; //birthplace
  f = function () {
    // a variable is inside the backpack of the f function
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777; //birthplace
  f = function () {
    //re-born on h birthplace
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//re-assigning f function
h();
f();

console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3; //prioritize this first even theres a global varible. because of the closure prioritize this.

  //callback function
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
 */
