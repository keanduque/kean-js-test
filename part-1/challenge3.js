/*CODING CHALLENGE #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
    Your tasks:
    1. Calculate the average score for each team, using the test data below

    2. Compare the team's average scores to determine the winner of the competition,
    and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
    team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
    - Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    - Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    - Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
*/
let dolphinScore1 = 97;
let dolphinScore2 = 112;
let dolphinScore3 = 101;

const teamDolphinScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;

let koalaScore1 = 109;
let koalaScore2 = 95;
let koalaScore3 = 106;

const teamKoalaScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

const minScore = 100;

console.log("teamDolphinScore",teamDolphinScore);
console.log("teamKoalaScore",teamKoalaScore);

if((teamDolphinScore >= minScore) && (teamDolphinScore > teamKoalaScore)){
    console.log("Team Dolphin is the Winner!");
} else if ((teamDolphinScore < teamKoalaScore) && (teamKoalaScore > minScore)) {
    console.log("Team Koala is the Winner!");
} else if ((teamDolphinScore === teamKoalaScore) && (teamDolphinScore >= minScore) && (teamKoalaScore >= minScore)) {
    console.log("Draw!")
} else {
    console.log("No Teams win the trophy")
}