/*
CHALLENGE #5
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27

*/

// Functions 

console.time("timer");

const calcAverage = (score1, score2, score3) => {
        return (score1 + score2 + score3) / 3;
}

const checkWinner = (avgDolphins,avgKoalas) => {

    if(avgDolphins > avgKoalas)
    {
        let doubleAvg = avgDolphins * 2;

        if(doubleAvg >= avgKoalas){
            console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        }
        else{
            console.log("No team wins...");
        }
    }
    else if(avgDolphins < avgKoalas){
        let doubleAvg = avgKoalas * 2;
        if(doubleAvg  >= avgDolphins){
            console.log(`Koala win (${avgKoalas} vs. ${avgDolphins})`);
        }
        else{
            console.log("No team wins...");
        }

    } 

}



// Dolphin Scores
let dolphinScore1 = 44;
let dolphinScore2 = 23;
let dolphinScore3 = 71;


// Koalas Scores
let koalaScore1 = 65;
let koalaScore2 = 54;
let koalaScore3 = 49;

// Dolphin Scores
let dolphinScore4 = 85;
let dolphinScore5 = 54;
let dolphinScore6 = 41;


// Koalas Scores
let koalaScore4 = 23;
let koalaScore5 = 34;
let koalaScore6 = 27;

let scoreDolphins = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3)
let scoreKoalas = calcAverage(koalaScore1, koalaScore2, koalaScore3)
// let scoreDolphins = calcAverage(dolphinScore4, dolphinScore5, dolphinScore6)
// let scoreKoalas = calcAverage(koalaScore4, koalaScore5, koalaScore6)

checkWinner(scoreDolphins,scoreKoalas)

console.timeLog("timer")