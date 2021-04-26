//**************PART 2
//Strict Mode
'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

 */

/* function logger(){
    console.log('My name is Kean!');
}
// calling / running / invoking function
logger();
logger();
logger();

//descriptive function
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23'); */

//Function Declaration vs. Expressions

//function declaration
/* function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//function expression
//function without a name or ANONYMOUS FUNCTION
const calcAge2 = function (birthYear){
    return 2037 - birthYear    
}
const age2 = calcAge2(1992)
console.log(age1, age2); */

//Arrow function
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Kean'));
console.log(yearsUntilRetirement(1980, 'Cherry'));
 */


//function calling other functions
/* function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));
 */

//Reviewing functions;
/* const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Kean'));
console.log(yearsUntilRetirement(1950, 'Jonas')); */

//Intro to Arrays

/* const friends = ["Alpha", "Beta", "Charlie"];

console.log(friends);

const years = new Array(1992, 1984, 2009, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

//can mutate array since this is not a primitive type
friends[2] = 'Delta';
console.log(friends);
//friends = ['Bob', 'dada'] //invalid for replacing new value but we can mutate array elemetn values.

const firstName = "Kean"
const kean = [firstName, 'Duque', 2021 - 1989, 'programmer', friends];
console.log(kean);
console.log(kean[3][1]);
console.log(kean.length);


//Exercise
function calcAge(birthYear){
    return 2037 - birthYear;
}
const years2 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];

console.log(ages);
 */

//Basic Array Methods

const friends = ["Alpha", "Beta", "Charlie"];

//ADD ELEMENTS

//Add element to the end of array
/* const newLength = friends.push('Echo');
console.log(friends);
console.log(newLength);

//Add element to the beggining of the array
friends.unshift('Zero');
console.log(friends);

//REMOVE ELEMENTS

//remove the last element of the Array
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

//return the element in the array
console.log(friends.indexOf('Beta'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends);
//same as indexOf that for ES6 returning true or false
console.log(friends.includes('Beta'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Alpha')){
    console.log('You have a friend called Alpha');
}
 */

// Intro to Objects

/* const keanArray = [
    'Kean',
    'Duque',
    2037 - 1989,
    'programmer',
    ['Cherry', 'Naruto', 'Conan']
] */
//console.log(keanArray);

/* const keanObj = {
    firstname   : "Kean",
    lastname    : "Duque",
    age        : 2037 - 1989,
    job         : 'programmer',
    friends     : ['Benjie', 'Naruto', 'Conan']
} */
//console.log(keanObj);

//Dot vs Bracket Notation
// console.log(keanObj.lastname);
// console.log(keanObj["lastname"]);
/* 
const nameKey = "name";
// console.log(keanObj['first' + nameKey]);
// console.log(keanObj['last' + nameKey]);

const interestedIn = prompt("What do you want to know about Kean? Choose between firstname, lastname, age, job and friends");

//console.log(keanObj.interestedIn); //undefined because the object doent have propery of that intertestedIn.

//will be evaluated
console.log(keanObj[interestedIn]);

keanObj.location = "Philippines";
keanObj["twitter"] = "@keanduque";

console.log(keanObj);

if(keanObj[interestedIn]){
    console.log(keanObj[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstname, lastname, age, job and friends");
}

// Challenge
// "Kean has 3 friends, and his best friend is called Michael
const sentence = `${keanObj.firstname} has ${keanObj.friends.length} friends, and his best friend is called ${keanObj.friends[0]}`;

console.log(sentence);
 */

//Object Methods=
/* const keanObj = {
    firstname   : "Kean",
    lastname    : "Duque",
    birthYear   : 1989,
    job         : 'programmer',
    friends     : ['Benjie', 'Naruto', 'Conan'],
    hasDriversLicense : false,

    // calcAge : function (birthYear){
    //     return 2037 - birthYear;
    // }
    // calcAge : function (){
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }
    calcAge : function (){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary : function (){
        this.summary = `${this.firstname} is a ${this.age}-year old ${this.job}, and he has ${(this.hasDriversLicense ? "a" : "no")} driver's license`;

        return this.summary;
    }
}; */
/* console.log(keanObj.calcAge());

console.log(keanObj.age);
console.log(keanObj.age);
console.log(keanObj.age);
//console.log(keanObj["calcAge"](1989));

//Challenge
// "Kean is a 46-year old programmer, and he has a/no driver's license"

keanObj.getSummary();
console.log(keanObj.summary); */

//Iteration for the Loop

// for loops keeps running while condition is TRUE
/* for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}
 */
//Looping Array, Breaking and Continuing

/* const keanArray = [
    'Kean',
    'Duque',
    2037 - 1989,
    'programmer',
    ['Cherry', 'Naruto', 'Conan'],
    true
]

const types = [];

for(let i=0; i < keanArray.length; i++){
    //reading from kean array
    //console.log(keanArray[i], typeof keanArray[i]);

    //filling types array
    //types[i] = typeof keanArray[i];
    types.push(typeof keanArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i=0; i<years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages); */

//Continue and Break
/* console.log("--- ONLY STRINGS ---");
for(let i=0; i < keanArray.length; i++){
    if(typeof keanArray[i] !== 'string') continue;

    console.log(keanArray[i], typeof keanArray[i]);
}
console.log("--- BREAK WITH NUMBER ---");
for(let i=0; i < keanArray.length; i++){
    if(typeof keanArray[i] === 'number') break;

    console.log(keanArray[i], typeof keanArray[i]);
}
 */

//Looping Backwards and Loops in Loops
const keanArray = [
    'Kean',
    'Duque',
    2037 - 1989,
    'programmer',
    ['Cherry', 'Naruto', 'Conan'],
    true
] 
/* 
for (let i=keanArray.length - 1; i >= 0; i--){
    console.log(i, keanArray[i]);
}

for (let exercise = 1; exercise <= 4; exercise++){
    console.log(`----------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🏋️‍♂️`);
    }
}
 */

//While Loop

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

/* let rep=1;
while(rep <=10){
    //console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    
    if(dice === 6) console.log('Loop is about to end...');
} */