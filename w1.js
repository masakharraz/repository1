//D1E1.W1
//TASK8.
var firstName = "Masa";
var lastName = "Kharraz";
var fullName = firstName + " " + lastName;
console.log(fullName);
//D1E2.W1
//TASK2
function helloWorld() {
    console.log("Hello World");
}

helloWorld();

//D2.E1.W1
//TASK21
function lengthsLessThan7(string1, string2) {
    return (string1.length + string2.length) <= 7;
}

let input1 = prompt("Enter the first string:");
let input2 = prompt("Enter the second string:");

console.log(lengthsLessThan7(input1, input2));

//D3.E1.W1
//Task24
function convertScoreToGradeWithPlusAndMinus(score) {
    if (score >= 95 && score <= 100) {
        return 'A+';
    } else if (score >= 90 && score <= 94) {
        return 'A-';
    } else if (score >= 87 && score <= 89) {
        return 'B+';
    } else if (score >= 80 && score <= 86) {
        return 'B-';
    } else if (score >= 77 && score <= 79) {
        return 'C+';
    } else if (score >= 70 && score <= 76) {
        return 'C-';
    } else if (score >= 67 && score <= 69) {
        return 'D+';
    } else if (score >= 60 && score <= 66) {
        return 'D-';
    } else if (score >= 0 && score <= 59) {
        return 'F';
    } else {
        return 'Invalid Score';
    }
}
console.log(convertScoreToGradeWithPlusAndMinus(85)); // Output: B-
console.log(convertScoreToGradeWithPlusAndMinus(92)); // Output: A-
console.log(convertScoreToGradeWithPlusAndMinus(105)); // Output: Invalid Score

//D4.E1.W1
//TASK14
let x = "";

function charAtIndex(string, number) {
    x = string.charAt(number);
}

console.log(x); 

charAtIndex("hello", 2);
console.log(x); 

charAtIndex("world", 0);
console.log(x); 

//D5.E1.W1
//TASK13
function sumEven(num1, num2) {
    let sum = 0;
    for (let i = num1; i < num2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

let result = sumEven(num1, num2);

console.log("The sum of all even numbers between " + num1 + " and " + num2 + " (excluding " + num2 + ") is: " + result);

//D6.E1.W1
//TASK23

function fencePostLoop(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += i;
        if (i < n) {
            result += ", ";
        }
    }
    return result;
}

let input = parseInt(prompt("Enter a number:"));
console.log(fencePostLoop(input));

