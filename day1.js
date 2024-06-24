// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


// user data 

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Calculation BMI for both Mark and John

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("MArk BMI is ", BMIMark);
console.log("John BMI is ", BMIJohn);

// ternary operator
// let markHigherBMI = (BMIMark > BMIJohn) ? "Mark has a higher BMI than John" : "John has a higher BMI than Mark" ;

let markHigherBMI;

if (BMIMark > BMIJohn) {
    markHigherBMI = "Mark has a higher BMI than John";
} else {
    markHigherBMI = "John has a higher BMI than Mark";
}

console.log(markHigherBMI);