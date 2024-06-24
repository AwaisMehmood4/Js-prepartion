// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is



// user data 

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Calculation BMI for both Mark and John

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log("MArk BMI is ", BMIMark);
// console.log("John BMI is ", BMIJohn);


let markHigherBMI = (BMIMark > BMIJohn) ? 
        console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`) 
        : console.log(`Mark's BMI (${BMIJohn}) is higher than John's (${BMIMark})!`);




