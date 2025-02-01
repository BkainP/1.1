// Original console log
console.log("Hello Professor");

// Global variable
var globalVar = 10;

console.log("Global Variable:", globalVar);

function exampleFunction() {
    // Block variable
    let blockVar = 5;

    console.log("Block Variable:", blockVar);

    // Mathematical operations
    console.log("Sum:", globalVar + blockVar);
    console.log("Product:", globalVar * blockVar);
}

exampleFunction();

// String variable
let stringVar = "Hello, World!";
console.log("String Variable:", stringVar);

// Object variable
const objectVar = {
    name: "Brad",
    age: 28,
    city: "Texas"
};

console.log("Object Variable:", objectVar);