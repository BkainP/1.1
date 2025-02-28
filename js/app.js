// Original console log -> professor greeting
console.log("Hello Professor");

// Global variable -> stores number
var globalVar = 10;
console.log("Global Variable:", globalVar);

// For Loop (counts from 1 to 5)
for (let i = 1; i <= 5; i++) {
    console.log("For Loop Count:", i);
}

// While Loop (keeps asking for input until something is entered)
let username = "";
while (username === "") {
    username = window.prompt("Enter your name:");
}
console.log(`Welcome, ${username}!`);

// Change CSS with JavaScript
const paragraph = document.getElementById("myParagraph"); // Assuming an element with this ID exists
paragraph.style.color = "blue"; // Change text color

// Change CSS based on a variable value
let userLevel = 10; // Example variable
if (userLevel > 5) {
    paragraph.style.fontSize = "24px"; // Increase text size if condition is met
} else {
    paragraph.style.fontSize = "16px"; // Default size
}

// Button event listener (to demonstrate changing CSS on button click)
document.getElementById("myButton").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        // Toggle color between blue and red
        paragraph.style.color = paragraph.style.color === "blue" ? "red" : "blue";
    } else {
        paragraph.style.display = "none";
    }
});