// Original console log -> professor greeting
console.log("Hello Professor");

// Global variable -> stores number
var globalVar = 10;
console.log("Global Variable:", globalVar);

// Object with multiple properties and a method
const student = {
    name: "Bradley",
    age: 28,
    course: "JavaScript Basics",
    introduce: function() {
        console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old and learning ${this.course}.`);
    }
};

// Invoke the object method
student.introduce();

// Array of favorite programming languages
let favoriteLanguages = ["JavaScript", "Python", "C++", "Ruby"];

// Array method - Adding a new language to the array
favoriteLanguages.push("Java");

// Logging the updated array
console.log("Updated Languages:", favoriteLanguages);