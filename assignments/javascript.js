// NAME: DEEPTI RAWAT
// STUDENT NUMBER: 0866723
// DATE: 17-1-2025
// ASSIGNMENT : QUESTION 1

// Function to check if a number is prime
function isPrime(numb) {
    if (numb <= 1) {
      return false;  // 1 and numbers less than 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(numb); i++) {
      if (numb % i === 0) {
        return false;  // If divisible by any number other than 1 and itself
      }
    }
    return  true;  // Prime number
  }
  
  // Main function to   prompt user input and process the number
  function getInputAndProcess() {
    let userInput;
    
    // Do-while loop to ensure valid input is entered
    do {
      userInput = prompt("Please enter a positive integer:");
      
      // Check if input is a valid number and greater than 0
      if (isNaN(userInput) || userInput <= 0 || userInput % 1 !== 0) {
        console.log("Invalid input. Please enter a positive integer.");
        continue;  // Restart the loop if input is not valid
      }
      
      // Parsing  the input as an integer
      userInput = parseInt(userInput);
  
      // Break the loop once a valid input is entered
      break;
  
    } while (true);
  
    // Loop through  the all numbers from 1 to the input number
    for (let i = 1; i <= userInput; i++) {
      if (isPrime(i)) {
        let  squareOfPrime = i * i;
        console.log(`Prime number: ${i},  Square: ${squareOfPrime}`);
      }
    }
  }
  
  // Calling    the main function
  getInputAndProcess() ;
  



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







// NAME: DEEPTI RAWAT
// STUDENT NUMBER: 0866723
// DATE: 17-1-2025
// ASSIGNMENT : QUESTION 3

// Prompting  the user for a single word
let userWord = prompt("P lease enter a single word:");

// Check the first letter of the word
let firstLetter = userWord.charAt(0).toLowerCase();

// If the word starts with a vowel (a, e, i, o, u), convert it to uppercase
if (['a', 'e', 'i', 'o', 'u'].includes(firstLetter)) {
  console.log(userWord.toUpperCase());
} else {
  // If the word starts with a consonant, convert to the lowercase
  console.log(userWord.toLowerCase());
}