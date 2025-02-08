// Original console log -> professor greeting
console.log("Hello Professor");

// Global variable -> stores number
var globalVar = 10;
console.log("Global Variable:", globalVar);

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