// NAME: DEEPTI RAWAT
// STUDENT NUMBER: 0866723
// DATE: 17-1-2025
// ASSIGNMENT : QUESTION 2

// Prompt the user for their birth year and current year
let birthYear = prompt("Enter   your birth year:");
let currentYear = prompt("Enter the current year:");

// Calculate the user's age
let age = currentYear - birthYear;

// Prompt the user for their favorite hobby
let favoriteHobby = prompt("What is your favorite hobby?");

// Display age, hobby, and a custom message about retirement in one console.log
console.log(`You are ${age} years old  ,and your favorite hobby is ${favoriteHobby}.
You can plan to retire at age of 65, which means you have ${65 - age} years left until  retirement.`);
