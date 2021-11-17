// _____ CONDITIONALS _____
// Defintion: perform different operations based on the given condition


console.log("The first exercise is checking positive or negative");
// Task: define wheterh a number is positive or negative
let integer = 1;

// inside the parenthesis in an if statement, we write a logical statement checking whether it's true or false.
if(integer < 0) {
    console.log("negative: " + integer);
}
else {
    // if we didn't meet our logical statement, else code block will execute
    console.log("positive: " + integer);
}

// Task: setting up a security web site that grants users over the age of 18 access to the site.
// write a conditional that gives users who are 18+ access and logs access denied for users who do not meet the given condition.
console.log("The second exercise is checking age old enough");

let age = 16;
// if age is at least 18, then allow access
if (age >= 18) {
    console.log("access granted");
}
else {
    console.log("log access denied");
}

//Task:
/*
    Nested if/else statement
        Declare variable called num
        Add an if/else statement that checks if num in positive & greater than 100
*/
console.log("The third exercise is nested if/else");

let num = '0';
// if num is positive
if (num > 0) {
    console.log("number: " + num + " is positive");
        // if num is greater than 100
     if (num > 100) {
        console.log("number: " + num + " is greater than 100");
     }
     else if (num < 100) {
         console.log ("number: " + num + " is less than 100");
     }
     else {
         console.log("num is 100");
     }
}
// if num is negative
else if (num < 0) {
    console.log("number: " + num + " is negative");
}
else if (num === 0) {
    console.log("number is 0");
}
// everything else
else {
    console.log(num + " is not a number, it is: " + typeof(num));
}



// Task what is your grade
/* 
    If student gets 90 or higher: log A
    If 80 or above: log B
    If 70 or above: log C
    If 55 or above: log D
    If below 55: log F
*/
console.log("The fourth exercise is determining a grade");
let grade = 100;

if (grade >= 90) {
    console.log('A');
} else if (grade >= 80) {
    console.log('B');
} else if (grade >= 70) {
    console.log('C');
} else if (grade >= 55) {
    console.log('D');
} else if (grade > 0) {
    console.log('F');
} else {
    console.log('error');
}

console.log("CURRENT EXERCISE IS BELOW HERE")

// Working on inputs from console
// in order for this to work, need to 
//      npm install prompt-sync
const prompt = require('prompt-sync')();

// const name = prompt('What is your name?');
//  console.log('Hey there ', name);

// let inputGrade = prompt('what is your grade?');
// console.log('the input grade is', inputGrade);


// ======= REMAINDER OPERATOR ========
// Remainder operator (also known as modulo) returns the remainder left over when one operand is 
// divided by a second operand. It always takes the sign of the dividend.

// dividend meaning %

console.log("REMAINDERS");
console.log(4 % 3) // 1
console.log(20 % 2) // 0
console.log(20 % 9) // 2
console.log(5 % -4) //1

// use cases
// find out whether something is divisible by 2 means it's an even number
// an even number is always going to have a remainder of 0
// an odd number is always going to have a remainder of 1

// 24 => true
console.log(24 % 2 == 0)
//35
console.log(35 % 2 !== '0')
console.log(35 % 2 !== 0)
console.log(35 % 2 === 1)
