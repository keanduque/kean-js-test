//---------Part 2
'use strict';

//ass#1
/* function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descPhi = describeCountry('Philippines', 110, 'Manila');
const descJap = describeCountry('Japan', 10, 'Tokyo');
const descIta = describeCountry('Italy', 100, 'Milan');

console.log(descPhi);
console.log(descJap);
console.log(descIta);
 */

//ass#2
/* console.log('FUNCTION DECLARATION OUTPUT :');
function percentageOfWorld1(population){
    const percentage = population / 7900;
    return percentage * 100;
}
const descChi = percentageOfWorld1(1441);
const descPhi = percentageOfWorld1(110);
const descIta = percentageOfWorld1(100);

console.log(descChi);
console.log(descPhi);
console.log(descIta);

console.log('FUNCTION EXPRESSION OUTPUT :');
const percentageOfWorld2 = function(population){
    const percentage = population / 7900;
    return percentage * 100;
}
const descChi2 = percentageOfWorld2(1441);
const descPhi2 = percentageOfWorld2(110);
const descIta2 = percentageOfWorld2(100);

console.log(descChi2);
console.log(descPhi2);
console.log(descIta2);
*/
//ass#3
/* console.log('ARROW FUNCTION OUTPUT :');
const percentageOfWorld3 = (population) => {
    const percentage = population / 7900;
    return percentage * 100;
}


//ass#4
const describePopulation = (country, population) => {
    const percentage = percentageOfWorld3(population);

    return `${country} has ${population} million people, which is about ${percentage} of the world`;
}

const descChi3 = describePopulation('China', 1441);
const descPhi3 = describePopulation('Philippines', 110);
const descIta3 = describePopulation('Italy', 100);

console.log(descChi3);
console.log(descPhi3);
console.log(descIta3);  */

//ass#5
function percentageOfWorld1(population){
    const percentage = population / 7900;
    return percentage * 100;
}

// const populations = [110, 80, 100, 1441];

// console.log(populations);

// const percentage = [
//     percentageOfWorld1(110), 
//     percentageOfWorld1(80), 
//     percentageOfWorld1(100), 
//     percentageOfWorld1(1441)
// ];
// console.log(percentage);

// //ass#6

// const neighbours = ["Taiwan", "Malaysia", "Korea"];

/* neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

!neighbours.includes("Germany") ? console.log("Probably not a central European country :D") : "";

console.log(neighbours.indexOf("Malaysia"))
neighbours[1] = "Australia";
console.log(neighbours);
 */

//ass#7
/* const myCountry = {
    country : "Philippines",
    capital : "Manila",
    language : "Tagalog",
    population : 108,
    neighbors : ["Japan", "Australia", "Taiwan", "Hongkong", "Malaysia"]
} */

//ass#8

/* console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry["language"]}-speaking people, ${myCountry.neighbors.length} neighbouiring countries and a capital called ${myCountry["capital"]}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry["population"]);
 */

//ass#9
const myCountry = {
    country : "Philippines",
    capital : "Manila",
    language : "Tagalog",
    population : 108,
    neighbors : ["Japan", "Australia", "Taiwan", "Hongkong", "Malaysia"],
    describe : function (){
        return console.log(`${this.country} has ${this.population} million ${this["language"]}-speaking people, ${this.neighbors.length} neighbouiring countries and a capital called ${this["capital"]}`);
    },
    checkIsland : function (){
        this.isIsland = (this.neighbors.length === 0) ? true : false;
        return this.isIsland;
    }
}
// myCountry["describe"]();
// myCountry.checkIsland();
// console.log(myCountry.checkIsland());

//ass#10
// for(let i=1; i<=50; i++){
//     console.log(`Voter number ${i} is currently voting`);
// }

//ass#11
const populations = [110, 80, 100, 1441];
const percentage2 = [];

for(let i=0; i < populations.length; i ++){
    percentage2.push(percentageOfWorld1(populations[i]));
}
//console.log(percentage2);

//ass#12
/* const listOfNeighbours = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']
];
//console.log(listOfNeighbours);

for(let i = 0; i < listOfNeighbours.length; i++){
    for(let j = 0; j < listOfNeighbours[i].length; j++){
        console.log(`Neighbour : ${listOfNeighbours[i][j]}`);
    } 
}
 */

//ass#13
let percentage3 = [];
let i = 0;
while(populations.length > i){
    const per = percentageOfWorld1(populations[i]);
    percentage3.push(per);
    i++;
}
//console.log(percentage3);