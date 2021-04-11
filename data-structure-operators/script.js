"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // [`day-${2 + 4}`]: {
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //ES6 Enhancement you can remove the function in object see sample below
  //using Destructuring Object
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    // using Spread unpacking elements
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    //using REST operator arguments
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/* 
//////////////////////////////
//Looping Objects : Object.keys, values, and entries

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire Object with Keys and Values
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
 */
/* 
//////////////////////////////
//Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  //console.log(restaurant.openingHours.mon);
  //if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

  //WITH optional chaining
  console.log(restaurant.openingHours.mon?.open); //undefined
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

//Arrays
const usersArr = [{ name: "Kean", email: "kduque@yahoo.com" }];

//optional chaining
console.log(usersArr[0]?.email ?? "User array empty");

//equivalent to
if (usersArr.length > 0) console.log(usersArr[0].name);
else console.log("user array empty"); */

/* 
//////////////////////////////
//Looping Arrays the For Of Loop ES6
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);


//.entries() return the index number and element itself
//old way
for (const item of menu.entries()) {
  //console.log(`${item[0] + 1}: ${item[1]}`); // old way
}
//new way with destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} */

//console.log([...menu.entries()]);

/* 
//////////////////////////////
//Nullish Coalescing Operator (??)   - ES 2020
//works with the null and undefined. (NOT 0 or '')
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); */

/* 
//////////////////////////////
//Short Circuiting (&& and ||)

console.log("------- OR --------"); //shoftcircuit when the first value is true, will not continue when evaluation is already true
//Use any data type, return Any data type, short-circuiting
console.log(3 || "Kean");
console.log("" || "Kean");
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log("guests1", guests1);

const guests2 = restaurant.numGuests || 10;
console.log("guests2", guests2);

console.log("------- AND --------"); //evaluated when the result is true. will continue

console.log(0 && "Kean"); // False && True
console.log(7 && "Kean"); // TRUE && TRUE
// TRUE   && T  && F   & F
console.log("Hello" && 23 && null && "Kean");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinash");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");
 */
/* 
//////////////////////////////
//Rest Pattern and Parameters - same as spread operators but opposite of the Spread Operators.
//Rest Operator - Collect multiple elements and condence them into an array, unpack an array, Collects elements that are unused in the De-structuring assignment
//Spread Operator - to build new arrays or to pass multiple values into a function. to expand array into individual elements. pack elements into an array

// 1) Destructuring

//Spread Operator, because on RIGHT side of the assignment operator.
const arr = [1, 2, ...[3, 4]];
//REST, because on LEFT side of = sign
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

//Rest element is not include skip element, rest pattern is in the last of the Destructuring assignments.
//const [pizza, , risotto, ...otherFood, bread] = [ //Error : Rest element must be last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
//in this example the ...weekdays REST element is collect the rest of the property into new object.
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 8, 2, 5);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms"); */

/* 
//////////////////////////////
//The Spread Operator (...) - expands an array to all its elements. unpacking all array elements at once

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log("badNewArr", badNewArr); //(5) [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr];
console.log("newArr", newArr); //(5) [1, 2, 7, 8, 9]
console.log(...newArr); //1 2 7 8 9

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); //(4) ["Pizza", "Pasta", "Risotto", "Gnocci"]
//destructuring array similar to Spread Operator.
//spread operator takes all the elements from the array and also doenst create new variables. consequence is we can only use it in a places where we would otherwise write values separated by comma

//Copy array
const mainMenuCopy = [...restaurant.mainMenu]; //same as Object.assign
console.log(mainMenuCopy); //(3) ) ["Pizza", "Pasta", "Risotto"]

//merge/Join arrays or more together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu); //(7) ["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

//NOTE : Iterables : are arrays, strings, maps or Sets but not Objects


const str = "Kean";
const letters = [...str, " ", "D."];
console.log(letters); //(6) ["K", "e", "a", "n", " ", "D."]

console.log(...str); //K e a n
//console.log(`${...str} D.`); //not work we cant do. not a place that expects multiple values separated by a comma
//multiple values separated by comma are usually only expected when pass arguments into functions or when built new array.

//Real-world Example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Let's make pasta! Ingredient 2?"),
  // prompt("Let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

//old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//new way using spread operator
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristaurante Roma";
console.log(restaurant.name); //Classico Italiano
console.log(restaurantCopy.name); //Ristaurante Roma
*/
/* 
//////////////////////////////
//Object Destructuring

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
}); //Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  mainIndex: 0,
}); //Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values in objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested Objects
const {fri: { open: o, close: c }} = openingHours;
console.log(o, c);
*/

/* 
/////////////////////////////////////////////////
//Destructuring Arrays - ES6 feature, unpacking values from an array or object into separate variables, or break complex data structure down into smaller data structure like a variables. retrieve elements from the array and store them into variables in easy way.



const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //destructuring arrays
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
let temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); //Vegetarian Italian

[main, secondary] = [secondary, main];
console.log(main, secondary); //Italian   Vegetarian

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread    Pizza

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [nested1, , nested2] = nested;
// console.log(nested1, nested2);
const [k, , [i, j]] = nested;
console.log(k, i, j);

// Default Values // useful when getting data in the API
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

 */
