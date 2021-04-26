//**************PART 1

/* let js = 'amazing';
console.log(40+8+23-10);

console.log("Kean");
console.log(33)

let firstName = "Kean";

console.log(firstName)
console.log(firstName)
console.log(firstName)

//variable name conventions
let kean_cherry = "KC";
let $function = 27;

let person = "kean";
let PI = 3.1416; 

let myFirstJob = "Coder";
let myCurrentJob = "Designer";

let job1 = "programmer";
let job2 = "designer";

console.log(myFirstJob); */

//data types
/* let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof(javascriptIsFun));
// console.log(typeof true);
// console.log(typeof 32);
// console.log(typeof 'Kean');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1989;
console.log(typeof year);

console.log(typeof null); */

//let, const and var
/* let age = 32;
age = 33;

//Type error - inmuttable variable
// const birthYear = 1989;
// birthYear = 1990;
//Missing initializer in const declaration
//const job;

var job = 'programmer';
job = 'designer';

lastName = "Duque";
console.log(lastName); */

//Basic Operators
//Math Operators
/* const now = 2037
const ageKean = now - 1989;
const ageCherry = now - 2020;
console.log(ageKean, ageCherry);

console.log(ageKean * 2, ageKean / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Kean";
const lastName = "Duque";

console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *=4 // x = x * 4 = 100
x++; //101
x--; //100
x--; //99
console.log(x);

//Comparison Operators
console.log(ageKean > ageCherry); //true // >, <, >=, <=
console.log(ageCherry >= 18);

const isFullAge = ageCherry >= 18;
console.log(now - 1991 > now - 2018); */

//Operator Precedence
// const now = 2037
// const ageKean = now - 1989;
// const ageCherry = now - 2020;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25-10-5; //x = y = 10
// console.log(x,y); 

// const avgAge = (ageKean + ageCherry) / 2
// console.log(ageKean, ageCherry, avgAge);

//Strings & Templates Literals

/* const firstName = 'Kean';
const job = 'designer';
const birthYear = 1989;
const year = 2037;

const kean = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log("Normal : " + kean);

const keanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log("TemplateLiterals : " + keanNew);

console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');

console.log(`String Template Literals with backticks
multiple
lines`); */

//Taking Decisions If/else Statement
// const age = 15;

// if(age >= 18){
//     console.log("Cherry can start driving license 🚗");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Cherry is too young. wait another ${yearsLeft} 👧`);
// }

// const birthYear = 1991;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//Type Conversion 
/* const inputYear = '1991';
console.log(Number(inputYear) + 18);

console.log(Number('Kean'))
console.log(typeof NaN);

console.log(String(33), 23);

//Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" > "18");

let n = '1' + 1;
n = n - 1;
console.log(n); */

// 5 falsy values 0, ', undefined, null, NaN
/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Kean'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money){
    console.log("Dont spend it all");
}else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("Yay! height is defined");
} else{
    console.log("Height is UNDEFINED");
} */

//Equality Operators: == vs ===
/* const age = '18';
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favNumb = Number(prompt("what's your favourite number?"));
console.log(favNumb);

if (favNumb === 27){
    console.log(`Cool! ${favNumb} is an amazing number`);
} else if(favNumb === 7) {
    console.log('7 is also a cool number')
} else if(favNumb === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('Number is not 27 or 7');
}

if(favNumb !== 27) {
    console.log('why not 27?');
}

 */

//Logical Operators
/* const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision) {
//     console.log("Cherry is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = true; 
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Cherry is able to drive!");
} else {
    console.log("Someone else should drive...");
} */

//switch statement
/* const day = 'wednesday';

switch(day){
    case 'monday' : 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
    break;
    case 'tuesday' : 
        console.log('Prepare theory videos');
    break;
    case 'wednesday' : 
    case 'thursday' :
        console.log('Write code examples');
        break;
    case 'friday' :
        console.log('Record videos');
        break;
    case 'saturday' :
    case 'sunday' :
        console.log('Enjoy the weekend :D');
        break;
    default :
        console.log('Not a valid day!');
}
console.log('------------------------------------');

if(day == 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day == 'tuesday'){
    console.log('Prepare theory videos');
} else if((day == 'wednesday') || (day == 'thursday')){
    console.log('Write code examples');
} else if(day == 'friday'){
    console.log('Record videos');
}else if((day == 'saturday') || (day == 'sunday')){
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
} */

//Statement & Expressions
/* 3 + 4
1991
true && false && !false

if (23 > 10){
    const str = '23 is bigger';
}
const me = 'Kean'
console.log(`I'm ${2037 - 1991} years old ${me}`); */

//The Conditional Operator (Ternary)
/* const age = 23;
//age >= 18 ? console.log('I like drink wine 🍷') : console.log('I like drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧'; 
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`); */

