'strict mode';

//Object.freeze = only freezes the 1st level of the object. not deep freeze.

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'kean' },
  { value: -45, description: 'Groceries 🥑', user: 'kean' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'kean' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'kean' },
  { value: -1100, description: 'New iPhone 📱', user: 'kean' },
  { value: -20, description: 'Candy 🍭', user: 'cherry' },
  { value: -125, description: 'Toys 🚂', user: 'cherry' },
  { value: -1800, description: 'New Laptop 💻', user: 'kean' },
]);

const spendingLimits = Object.freeze({
  //functional programming immutable
  kean: 1500,
  cherry: 100,
});

//spendingLimits.jay = 200;
// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure Function :D
const addExpense = function (state, limits, value, description, user = 'kean') {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'cherry'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses2 = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (const entry of budget)
//   //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// };
const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// Impure
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  //.reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

logBigExpenses(finalBudget, 500);
