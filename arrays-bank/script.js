'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
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
/* /////////////////////////////////////////////////
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
 */

/////////////////////////////////////////////////
//// Data Transformatin : Map, Filter, Reduce

// The Map Method - gave us brand new array

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
  //return 23;
});
// console.log(movements);
// console.log(movementsUSD);

//arrow function
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
//console.log('arrow Function : ', movementsUSDArrow);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
//console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);

//console.log(movementsDescriptions);

// The Filter Method
const deposits = movements.filter(mov => mov > 0);
//console.log('filter Method', deposits);

const depositsFor = [];
for (const mov of movements) mov > 0 ? depositsFor.push(mov) : '';
//console.log('ForOf', depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
//console.log(withdrawals);

// The Reduce Method

//console.log(movements);

//accumulator -> SNOWBALL effect
const balance = movements.reduce((acc, curr, i) => acc + curr, 0);
//console.log(balance);

/* Iteration 0: 0
script.js:151 Iteration 1: 200
script.js:151 Iteration 2: 650
script.js:151 Iteration 3: 250
script.js:151 Iteration 4: 3250
script.js:151 Iteration 5: 2600
script.js:151 Iteration 6: 2470
script.js:151 Iteration 7: 2540
 */

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

//Maximum value
const getMaximum = movements.reduce(
  (acc, curr) => (acc > curr ? acc : curr),
  movements[0]
);
//console.log(getMaximum);

/////////////////////////////////////////////////
//// Magic of Chaining Method

//console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0) // if there something problem check on the next chain
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

//console.log(totalDepositsUSD); //5522.000000000001

/////////////////////////////////////////////////
//// Find Methd - to retrieve 1 element of an array based on the condition - similar to filter but it only returns one element in an array

const firstWithdrawal = movements.find(mov => mov < 0); // will return only the first element or withdrawal
//console.log(firstWithdrawal);

const account1 = {
  owner: 'Kean Duque',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Cherry Quilates',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Hiro Zen Yamaguchi',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Yuki Nakama',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Cherry Quilates');
//console.log(account);

// for (const account of accounts) {
//   if (account.owner === 'Cherry Quilates') console.log(account);
// }
/* 
/////////////////////////////////////////////////
//// findIndex Method - returns the index of the found element
// both the find and findIndex get axes to current index and entire array. - ES6 only

const names = ['kean', 'cherry', 'gon', 'makubex'];
const checkName = element => element === 'gon';
const index = names.findIndex(checkName);

console.log(index);
names.splice(index, 1);
console.log(names); */

/////////////////////////////////////////////////
//// some and every Methods

//console.log(movements);
//EQUALITY
//console.log(movements.includes(-130)); //check for equality

//SOME METHOD - check the conditions - Specify the Condition
//console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 5000);
//console.log(anyDeposits); //false

//EVERY METHOD - returns true if all the elements in the array is satisfy the condition that we passed in.
//console.log(movements.every(mov => mov > 0)); //false
//console.log(account4.movements.every(mov => mov > 0)); //true

/* // Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

/////////////////////////////////////////////////
//// flat and flatMap ES 2019
//map first and flattening the result

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
//console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
//console.log(arrDeep.flat(2));

//flat
const overallBalanceFlat = accounts
  .map(acc => acc.movements)
  .flat() //combine nested array in one array
  .reduce((acc, mov) => acc + mov, 0);

//console.log(overallBalanceFlat); //17840

// flatMap - combination of map and flat
const overAllBalanceFlatMap = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
//console.log(overAllBalanceFlatMap); //17840
/* 
/////////////////////////////////////////////////
//// Sorting Arrays

//Strings : sort - mutate array - work on strings
const owners = ['Kean', 'Cherry', 'Zen', 'Hiroki'];
//console.log(owners.sort()); //["Cherry", "Hiroki", "Kean", "Zen"]

//Numbers
//console.log(movements); //200, 450, -400, 3000, -650, -130, 70, 1300]
//console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70] - not work

// Example for Sorting numbers
//       a  >  b
//[200, 450, -400, 3000, -650, -130, 70, 1300]
// return > 0 = B will be before A (switch order)
// return < 0 = A will be before B (keep order)
// Ascending - small to large numbers
// the return number doesnt really matter just follow the rules
const ascending = movements.sort((a, b) => {
  //console.log(a, b);
  if (a > b) return 1; //return > 0 = B will be before A (switch order)
  if (a < b) return -1; // return < 0 = A will be before B (keep order)
});
//simplify version
const asc = movements.sort((a, b) => a - b);
// console.log('ASC call back function', ascending);
// console.log('ASC arrow function', asc);

//Descending - large to small numbers
const descending = movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
//simplify version
const desc = movements.sort((a, b) => b - a);
// console.log('DESC call back function', descending);
// console.log('DESC arrow function', desc); */
/* 
/////////////////////////////////////////////////
//// More ways of Creating and filling array

const arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Empty arrays + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr2.fill(23, 2, 6);
console.log(arr2);

//Array.from (nicer version)
const y = Array.from({ length: 7 }, () => 1); //return only 1
console.log(y);

// _  (underscore) - throw away argument - dont use parameter
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// dice Roll
const diceRoll = Array.from({ length: 100 }, (_, i) =>
  Math.trunc(Math.random() * i)
);
console.log(diceRoll);

const labelBalance = document.querySelector('.balance__value');
//Exercise in UI
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
  //console.log(movementsUI.map((el) => Number(el.textContent.replace("€", ""))));

  // OR but most prefer is Array.from
  // const movementsUI2 = [...document.querySelectorAll(".movements__value")];
}); //[1300, 70, -130, -650, 3000, -400, 450, 200]
 */

/////////////////////////////////////////////////
//// Array Method Practices

// Ex#1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements) //[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
  .filter(mov => mov > 0) //[200, 450, 3000, 70, 1300, 5000, 3400, 8500, 200, 340, 50, 400, 430, 1000, 700, 50, 90]
  .reduce((sum, curr) => sum + curr, 0); //25180
//console.log(bankDepositSum);

// Ex#2
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements) //25180
//   .filter(mov => mov > 1000).length; //5

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements) //25180
  //.reduce((count, curr) => (curr > 1000 ? count + 1 : count), 0);
  .reduce((count, curr) => (curr > 1000 ? ++count : count), 0);
//console.log(numDeposits1000);

let a = 10;
//console.log(++a);

// Ex#3
const { deposits2, withdrawals2 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

      sums[cur > 0 ? 'deposits2' : 'withdrawals2'] += cur;

      return sums;
    },
    { deposits2: 0, withdrawals2: 0 }
  );
//console.log(deposits2, withdrawals2);

// Ex#4
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));
