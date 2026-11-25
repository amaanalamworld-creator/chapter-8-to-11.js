
// =====================================
// Q1. Greeting User
// =====================================

var userName = prompt("Enter your name");

console.log("Hello " + userName + "! Welcome.");


// =====================================
// Q2. Multiplication Table
// =====================================

var tableNumber = prompt("Enter a number for multiplication table");

if (tableNumber === null || tableNumber.trim() === "") {
    tableNumber = 5;
} else {
    tableNumber = Number(tableNumber);
}

console.log("Q2. Multiplication Table of " + tableNumber);

console.log(tableNumber + " x 1 = " + (tableNumber * 1));
console.log(tableNumber + " x 2 = " + (tableNumber * 2));
console.log(tableNumber + " x 3 = " + (tableNumber * 3));
console.log(tableNumber + " x 4 = " + (tableNumber * 4));
console.log(tableNumber + " x 5 = " + (tableNumber * 5));
console.log(tableNumber + " x 6 = " + (tableNumber * 6));
console.log(tableNumber + " x 7 = " + (tableNumber * 7));
console.log(tableNumber + " x 8 = " + (tableNumber * 8));
console.log(tableNumber + " x 9 = " + (tableNumber * 9));
console.log(tableNumber + " x 10 = " + (tableNumber * 10));


// =====================================
// Q3. City Name
// =====================================

var city = prompt("Enter your city name");

if (city.toLowerCase() === "karachi") {
    console.log("Welcome to city of lights");
}


// =====================================
// Q4. Gender
// =====================================

var gender = prompt("Enter your gender");

if (gender.toLowerCase() === "male") {
    console.log("Good Morning Sir.");
}
else if (gender.toLowerCase() === "female") {
    console.log("Good Morning Ma'am.");
}


// =====================================
// Q5. Traffic Signal
// =====================================

var signalColor = prompt("Enter traffic signal color");

if (signalColor.toLowerCase() === "red") {
    console.log("Vehicles must stop");
}
else if (signalColor.toLowerCase() === "yellow") {
    console.log("Vehicles should get ready to move");
}
else if (signalColor.toLowerCase() === "green") {
    console.log("Vehicles can move now");
}
else {
    console.log("Invalid signal color");
}


// =====================================
// Q6. Age Eligibility
// =====================================

var maxAge = Number(prompt("Enter maximum age"));
var currentAge = Number(prompt("Enter your current age"));

if (currentAge <= maxAge) {
    console.log("You are welcome");
}
else {
    console.log("You are not eligible");
}


// =====================================
// Q7. Car Fuel
// =====================================

var fuel = Number(prompt("Enter remaining fuel in litres"));

if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
}
else {
    console.log("You have enough fuel");
}


// =====================================
// Q8. Check the Given Conditions
// =====================================

// Part A
var a = 4;

if (++a === 5) {
    console.log("given condition for variable a is true");
}

// Part B
var b = 82;

if (b++ === 83) {
    console.log("given condition for variable b is true");
}

// Part C
var c = 12;

if (c++ === 13) {
    console.log("condition 1 is true");
}

if (c === 13) {
    console.log("condition 2 is true");
}

if (++c < 14) {
    console.log("condition 3 is true");
}

if (c === 14) {
    console.log("condition 4 is true");
}

// Part D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    console.log("The cost equals");
}

// Part E
if (true) {
    console.log("True");
}

if (false) {
    console.log("False");
}

// Part F
if ("car" < "cat") {
    console.log("car is smaller than cat");
}


// =====================================
// Q9. Student Marks, Grade and Remarks
// =====================================

var subject1 = Number(prompt("Enter marks of subject 1"));
var subject2 = Number(prompt("Enter marks of subject 2"));
var subject3 = Number(prompt("Enter marks of subject 3"));

var totalMarks = Number(prompt("Enter total marks"));

var obtainedMarks = subject1 + subject2 + subject3;

var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

console.log("Q9. Student Result");
console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + obtainedMarks);
console.log("Percentage: " + percentage.toFixed(2) + "%");
console.log("Grade: " + grade);
console.log("Remarks: " + remarks);


// =====================================
// Q10. Shopping Cart Checkout
// =====================================

var item1 = prompt("Enter name of item 1");
var item2 = prompt("Enter name of item 2");

var price1 = Number(prompt("Enter price of item 1"));
var price2 = Number(prompt("Enter price of item 2"));

var quantity1 = Number(prompt("Enter quantity of item 1"));
var quantity2 = Number(prompt("Enter quantity of item 2"));

var shipping = Number(prompt("Enter shipping charges"));

var total1 = price1 * quantity1;
var total2 = price2 * quantity2;

var cartTotal = total1 + total2 + shipping;

var discount = 0;

if (cartTotal > 2000) {
    discount = cartTotal * 0.10;
}

var payableAmount = cartTotal - discount;

console.log("Q10. Shopping Cart Receipt");
console.log("Item 1: " + item1);
console.log("Price: " + price1);
console.log("Quantity: " + quantity1);

console.log("Item 2: " + item2);
console.log("Price: " + price2);
console.log("Quantity: " + quantity2);

console.log("Shipping Charges: " + shipping);
console.log("Total Cost: " + cartTotal);
console.log("Discount: " + discount);
console.log("Net Payable Amount: " + payableAmount + " PKR");


// =====================================
// Q11. Guess Game
// =====================================

var secretNumber = 7;

var guessNumber = Number(prompt("Guess a number between 1 and 10"));

if (guessNumber === secretNumber) {
    console.log("Bingo! Correct answer");
}
else if (guessNumber + 1 === secretNumber) {
    console.log("Close enough to the correct answer");
}
else {
    console.log("Wrong answer");
}


// =====================================
// Q12. Divisible by 3
// =====================================

var number = Number(prompt("Enter a number"));

if (number % 3 === 0) {
    console.log("The number is divisible by 3");
}
else {
    console.log("The number is not divisible by 3");
}


// =====================================
// Q13. Team Scores
// =====================================

var teamA = prompt("Enter Team A name");
var teamB = prompt("Enter Team B name");

var scoreA = Number(prompt("Enter Team A score"));
var scoreB = Number(prompt("Enter Team B score"));

if (scoreA > scoreB) {
    console.log(teamA + " has won the game");
}
else if (scoreB > scoreA) {
    console.log(teamB + " has won the game");
}
else {
    console.log("The game is a tie");
}


// =====================================
// Q14. Check Data Types
// =====================================

var stringValue = "Hello JavaScript";
var numberValue = 100;
var booleanValue = true;

console.log("Q14. Data Types");

console.log("Value: " + stringValue);
console.log("Type: " + typeof stringValue);

console.log("Value: " + numberValue);
console.log("Type: " + typeof numberValue);

console.log("Value: " + booleanValue);
console.log("Type: " + typeof booleanValue);


// =====================================
// Q15. Even or Odd Number
// =====================================

var evenOdd = Number(prompt("Enter a number"));

if (evenOdd % 2 === 0) {
    console.log("The number is Even");
}
else {
    console.log("The number is Odd");
}


// =====================================
// Q16. Weather in Karachi
// =====================================

var temperature = Number(prompt("Enter current temperature"));

if (temperature > 40) {
    console.log("It is too hot outside.");
}
else if (temperature > 30) {
    console.log("The Weather today is Normal.");
}
else if (temperature > 20) {
    console.log("Today's Weather is cool.");
}
else if (temperature > 10) {
    console.log("OMG! Today's weather is so Cool.");
}
else {
    console.log("It is very cold outside.");
}


// =====================================
// Q17. Simple Calculator
// =====================================

var firstNumber = Number(prompt("Enter first number"));
var secondNumber = Number(prompt("Enter second number"));

var operator = prompt("Enter operation (+, -, *, /, %)");

if (operator === "+") {
    console.log("Result: " + (firstNumber + secondNumber));
}
else if (operator === "-") {
    console.log("Result: " + (firstNumber - secondNumber));
}
else if (operator === "*") {
    console.log("Result: " + (firstNumber * secondNumber));
}
else if (operator === "/") {
    if (secondNumber !== 0) {
        console.log("Result: " + (firstNumber / secondNumber));
    }
    else {
        console.log("Cannot divide by zero");
    }
}
else if (operator === "%") {
    if (secondNumber !== 0) {
        console.log("Result: " + (firstNumber % secondNumber));
    }
    else {
        console.log("Cannot divide by zero");
    }
}
else {
    console.log("Invalid operator");
}


// =====================================
// Q18. Days of the Week
// =====================================

var day = prompt("Enter day name").toLowerCase();

if (day === "monday" || day === "tuesday" ||
    day === "wednesday" || day === "thursday" ||
    day === "friday") {

    console.log("It's a week day");
}
else if (day === "saturday") {
    console.log("It's weekend");
}
else if (day === "sunday") {
    console.log("Yay! It's a holiday");
}
else {
    console.log("Invalid day");
}


// =====================================
// Q19. Student Passing Marks
// =====================================

var score = Number(prompt("Enter your score"));

if (score > 50) {
    console.log("You are passed");
}
else {
    console.log("Try again!");
}


// =====================================
// Q20. Greater Number
// =====================================

var number1 = Number(prompt("Enter first number"));
var number2 = Number(prompt("Enter second number"));

if (number1 > number2) {
    console.log("The greater number of " + number1 +
        " and " + number2 + " is " + number1);
}
else if (number2 > number1) {
    console.log("The greater number of " + number1 +
        " and " + number2 + " is " + number2);
}
else {
    console.log("Both numbers are equal");
}


// =====================================
// Q21. The Translator
// =====================================

var language = prompt("Enter language code (es, de, en)");

if (language === "es") {
    console.log("Hola, Mundo");
}
else if (language === "de") {
    console.log("Hallo, Welt");
}
else if (language === "en") {
    console.log("Hello, World");
}
else {
    console.log("Hello, World");
}


// =====================================
// Q22. Positive or Negative Number
// =====================================

var positiveNegative = Number(prompt("Enter a number"));

if (positiveNegative > 0) {
    console.log("The number is Positive");
}
else if (positiveNegative < 0) {
    console.log("The number is Negative");
}
else {
    console.log("The number is Zero");
}


// =====================================
// Q23. The Pluralizer
// =====================================

var noun = prompt("Enter a noun");
var count = Number(prompt("Enter a number"));

var pluralNoun;

if (count === 1) {
    pluralNoun = noun;
}
else {
    pluralNoun = noun + "s";
}

console.log(count + " " + pluralNoun);
