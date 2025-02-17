// Original console log -> professor greeting
console.log("Hello Professor");

// Global variable -> stores number
var globalVar = 10;
console.log("Global Variable:", globalVar);

// Concatenated string variable
let firstName = "Bradley";
let lastName = "Pauls";
let fullName = firstName + " " + lastName; // Concatenated string
console.log("Full Name:", fullName); // Logging concatenated string

// If conditional statement
if (globalVar > 5) {
    console.log("Global Variable is greater than 5.");
} else {
    console.log("Global Variable is 5 or less.");
}

// Switch statement
let day = 3; // Example day
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// Function that takes parameters and returns a value -> aka math function
function exampleFunction(num1, num2) {
    // Perform operations using parameters -> addition & multiplications with passed variables
    console.log("Sum:", num1 + num2);
    console.log("Product:", num1 * num2);
    return num1 + num2; // Return value -> sum
}

// Function with parameters
let result = exampleFunction(globalVar, 5);
console.log("Returned Sum:", result);

// String variable -> Greeting
let stringVar = "Hello, World!";
console.log("String Variable:", stringVar);

// String method
console.log("Uppercase Message:", stringVar.toUpperCase()); // Using string method

// Number method
let numString = "42";
let num = Number(numString); // Converting string to number
console.log("Converted Number:", num); // Logging the converted number

// Object with multiple properties and a method -> aka a person & introduction message
const objectVar = {
    name: "Bradley",
    age: 28,
    city: "San Antonio, TX",
    introduce: function() {
        console.log(`Hi, my name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
    }
};

// Invoke the method -> action time :D
objectVar.introduce();

// Event Listener -> button click
document.getElementById("myButton").addEventListener("click", function() {
    console.log("Button clicked!");
});

// Object Variable -> keeping the original object for confirmation
console.log("Object Variable:", objectVar);