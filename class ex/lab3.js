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
