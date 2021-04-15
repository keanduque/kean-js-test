'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/* 
/////////////////////////////////////////////////
//// Simple Array

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE - does not mutate
console.log(arr.slice(2)); // returns new array and not mutate the original array
console.log(arr.slice(2, 4)); // length is nth param - the beginning
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE - does mutates the array
//console.log(arr.splice(2)); //deleted the extracted part.
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE - doest mutate the actual array
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT - does not mutate the orig array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //spread operator

//JOIN
console.log(letters.join(' - '));
 */
/* 
/////////////////////////////////////////////////
//// Looping Arrays - forEach

//deposits and withdraw
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}
console.log('-----------FOREACH------------');
//higher order function that tell callback functions what to do using foreEach method.

//movement : current element, index : current index, arr : entire array
// ForEach cannot break out, always loop in the entire array, continue and break statements do not work
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});
// 0 : function (200)
// 0 : function (450) and so on...until end of array

 */
/////////////////////////////////////////////////
//// forEach with Map and Sets

//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (currVal, key, map) {
  console.log(`${key}: ${currVal}`);
});

//Set - doesnt have keys
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); //_ is a throw away variable
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
