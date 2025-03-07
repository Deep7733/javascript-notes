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
  