//JS Part 2

/* 
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
    1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement */

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
let markHigherBMI = false;
let markBMI = 0;
let johnBMI = 0;

markBMI = markWeight / (markHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);
console.log("Data 1 | Mark's BMI :", markBMI);
console.log("Data 1 | John's BMI :", johnBMI);
if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

markBMI = markWeight2 / (markHeight2 ** 2);
johnBMI = johnWeight2 / (johnHeight2 ** 2);
console.log("Data 2 | Mark's BMI :", markBMI);
console.log("Data 2 | John's BMI :", johnBMI);
markHigherBMI = markBMI > johnBMI;

if(markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}