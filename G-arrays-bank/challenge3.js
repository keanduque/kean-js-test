'use strict';

//////////////////////////////
// Working with Arrays
// Coding Challenge #3

/* 

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] 


*/
console.log('----------CHALLENGE #3----------');

const calcAverageHumanAge2 = function (ages) {
  const calcHumanAge = ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age > 18)
    .reduce((accu, curr, i, arr) => accu + curr / arr.length, 0);
  return calcHumanAge;
};

const avg3 = calcAverageHumanAge2(testData1);
const avg4 = calcAverageHumanAge2(testData2);
console.log(avg3, avg4);
