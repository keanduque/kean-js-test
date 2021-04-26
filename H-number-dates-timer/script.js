'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Kean Duque',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Cherry Quilates',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/* 
/////////////////////////////////////////////////
// Converting and Checking Numbers

console.log(23 === 23.0);

// Base 10 - 0 to 9  1/10 = 0.1, 3/10 = 3.333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//Conversion
console.log(Number('23'));
console.log(+'23'); //type coercion automatically convert

//Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10)); //NaN

console.log(Number.parseInt('  2.5rem '));
console.log(Number.parseFloat('  2.5rem  '));

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// checking if value is number real number not string
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
 */
/* /////////////////////////////////////////////////
// Math and Rounding

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// max - min : 0...1 -> 0...(max - min) -> min...max

//console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3)); //better than trunc

//Rounding decimals
console.log((2.7).toFixed(0)); //always return string and not number
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
 */
/* 
/////////////////////////////////////////////////
// Remainder Operator
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function (e) {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    i % 2 === 0
      ? (row.style.backgroundColor = 'orangered') // 0, 2, 4, 6
      : (row.style.backgroundColor = 'white'); // 1, 3, 6, 9
  });
});
 */
/* 
/////////////////////////////////////////////////
// BigInt - new primitive this ES2020 : Big Integer you can store large number
// Numbers are represented internally as 64bits only 53 are used the rest is storing decimal points and sign there is a limit.

console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1); //not correct because of big number
console.log(2 ** 53 + 2); //not correct because of big number
console.log(2 ** 53 + 3); //not correct because of big number
console.log(2 ** 53 + 4); //not correct because of big number

console.log(342349723894723974937497120934); //3.4234972389472396e+29
console.log(342349723894723974937497120934n); //3.4234972389472396e+29
console.log(BigInt(342349723894723974937497120934));
console.log(BigInt(34234972389)); //34234972389n

//Operations
console.log(10000n + 10000n);
console.log(348238974349812308120830192830912830912803918209318n * 1000000000n);
//console.log(Math.sqrt(16n)); //Uncaught TypeError: Cannot convert a BigInt value to a number

const huge = 1231438423797012389898n;
const num = 23;
//console.log(huge * num); //script.js:386 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); //bigint
console.log(20 == 20n); //true
console.log(20n == '20'); //true

console.log(huge + ' is REALLY big!!!!'); //console.log(20 == 20n); //true

//Divisions
console.log(11n / 3n); // 3n
console.log(10 / 3); //3.3333333333333335
 */

/////////////////////////////////////////////////
// Creating Dates

//create a date 4ways of creating date
const now = new Date(); //current time
//console.log(now);

/* //parse date on a date string
console.log(new Date('Apr 19 2021 12:43:27'));
console.log(new Date('December 24, 2015')); //Thu Dec 24 2015 00:00:00 GMT+0800 (Philippine Standard Time)
console.log(new Date(account1.movementsDates[0])); //Tue Nov 19 2019 05:31:17 GMT+0800 (Philippine Standard Time)
console.log(new Date(2037, 10, 19, 15, 23, 5)); //Thu Nov 19 2037 15:23:05 GMT+0800 (Philippine Standard Time)
console.log(new Date(2037, 10, 31));
console.log(new Date(0)); //Thu Jan 01 1970 08:00:00 GMT+0800 (Philippine Standard Time) - initial unix time 
//  3 days * 24h = 1 day * 60min = 1hr * 60sec = 1min * 1000 milliseconds
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //259200000 - timestamps
*/
//working with dates
/* const future = new Date(2037, 2, 27, 15, 23, 50);
console.log(future); //Fri Mar 27 2037 15:23:50 GMT+0800 (Philippine Standard Time)
console.log(future.getFullYear()); //2037
console.log(future.getMonth()); //0 based November
console.log(future.getDate()); //19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //50
console.log(future.toISOString()); //2037-11-19T07:23:50.000Z
console.log(future.getTime()); //2121751430000

console.log(new Date(2121751430000));

console.log(Date.now()); //1618818898536

future.setFullYear(2040);
console.log(future);
 */

/* /////////////////////////////////////////////////
// Operations with Dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
 */

/////////////////////////////////////////////////
// Internationalizing Dates (Intl) API

//    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
/* 
/////////////////////////////////////////////////
// Internationalizing Numbers (Intl) API

const num = 3884764.23;
const options = {
  style: 'currency', //unit, percent
  currency: 'EUR',
  unit: 'celsius',
  // useGrouping: false,
};

console.log('US:       ', new Intl.NumberFormat('en-US', options).format(num));
console.log(
  'Germany:       ',
  new Intl.NumberFormat('de-DE', options).format(num)
);
console.log(
  'Japan:       ',
  new Intl.NumberFormat('ja-JP', options).format(num)
);
console.log(
  'Italy:       ',
  new Intl.NumberFormat('it-IT', options).format(num)
);
console.log(
  'Syria:       ',
  new Intl.NumberFormat('ar-SY', options).format(num)
);
console.log(
  navigator.language + '     ',
  new Intl.NumberFormat(navigator.language).format(num)
);
 */
/* 
/////////////////////////////////////////////////
// Timers : setTimeout and setInterval

//setTimeout - schedule a function to run after a certain amount of time
//but callback function only run once
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your pizza with ${ing1} and ${ing2}! 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval - executing every second
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 3000);
setInterval(function () {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getMilliseconds();
  const format = `${hour} : ${min} : ${sec}`;
  console.log(format);
}, 500);
 */
