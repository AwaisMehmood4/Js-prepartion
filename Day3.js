/*

CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

*/


// Dolphin Scores
let dolphinScore1 = 96;
let dolphinScore2 = 108;
let dolphinScore3 = 89;


// Koalas Scores
let koalaScore1 = 88;
let koalaScore2 = 91;
let koalaScore3 = 110;

// Avg of Dolphins Scores

let scoreDolphins = (dolphinScore1 + dolphinScore2 + dolphinScore3 ) / 3;

// Avg of Koalas Scores

let scoreKoalas = (koalaScore1 + koalaScore2 + koalaScore3 ) / 3;
// console.table([scoreDolphins,scoreKoalas]);

if (scoreDolphins > scoreKoalas) {
    console.log(" Dolphins win the trophy");
} 
else if(scoreDolphins == scoreKoalas){
    console.log("Both win the trophy");
}

else {
    console.log(" Koala win the trophy" );
}


