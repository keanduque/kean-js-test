"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

/////////////////////////////////////////////
// String Method Practice

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const formatText = flight.replace(/_/g, " ").split(";");
  const [msg, from, to, time] = formatText;
  const fromCode = getCode(from);
  const toCode = getCode(to);
  const hTime = time.replace(":", "h");
  const msgSymbol = msg.includes("Delayed") ? "🔴" + msg : msg;
  const output = `${msgSymbol} from ${fromCode} to ${toCode} (${hTime})`;
  console.log(output.padStart(50, " "));
}

/* 
/////////////////////////////////////////////
// Working with Strings Part - 3

//Split and Join
//split - split into multiple parts of array
//console.log("a+very+nice+string".split("+"));
//console.log("Kean Duque".split(" "));

const [firstName, lastName] = "Kean Duque".split(" ");
//console.log(firstName, lastName);

//Join strings
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
//console.log(newName);

const capitalizeName = function (name) {
  const splitNameArr = name.split(" ");
  let firstLetter = "";
  let names = [];
  for (let [n, ...lastLetter] of splitNameArr) {
    firstLetter = n.replace(n[0], n[0].toUpperCase());
    //firstLetter = n.replace(n.slice(0, 1).toUpperCase());
    names.push(firstLetter + lastLetter.join(""));
  }
  console.log(names.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("kean duque");

// Padding String
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "*"));
console.log("Kean".padEnd(10, "+"));

//Masking Number
const maskCreditCard = function (number) {
  const str = number + ""; //convert to string
  let lastNum = str.slice(-4);
  return lastNum.padStart(str.length, "*");
};
console.log(maskCreditCard(83839191));
console.log(maskCreditCard(4012888888881881));
console.log(maskCreditCard("333499595342211"));

// Repeat
const message2 = "Bad weather... All Departures Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
 */
/* 
/////////////////////////////////////////////
// Working with Strings Part - 2
const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase()); //or 'airline'.toUpperCase()

//Fix capitalization in name
const passenger = "kEaN"; // Kean
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixCapitalName = function (name) {
  const passengerLower = name.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);

  console.log(passengerCorrect);
};
fixCapitalName("kEaNzZ");
fixCapitalName("cHerRy");

// Comparing emails
const email = "hello@kean.io";
const loginEmail = "  Hello@Kean.Io \n";

// const lcEmail = loginEmail.toLowerCase();
// const trimmedEmail = lcEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

//RegEx  : g = global
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  let msg = "";
  msg =
    baggage.includes("knife") || baggage.includes("gun")
      ? "You are NOT allowed on board!"
      : "Welcome aboard!";

  return console.log(msg);
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for protection"); */
/* 
/////////////////////////////////////////////
// Working with Strings Part - 1

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

//indexOf and lastIndexOf - position in certain letter
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));
console.log(airline.indexOf("-portugal"));

//slice - position on which the extraction will start
//NOTE : this will not change the underlying strings. because its impossible to mutate strings because they are primitive.
console.log(airline.slice(4));
console.log(airline.slice(4, 7)); //end - beginning. 7 - 4

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  const str =
    s === "B" || s === "E" ? "You got the middle seats" : "You got lucky!";
  console.log(str);
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Kean")); //conversion
console.log(typeof new String("Kean"));
console.log(typeof new String("Kean").slice(1)); //all the string return primitive
 */
