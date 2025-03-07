// name:DEEPTI RAWAT
// STUDENT NUMBER: 0866723
// SECTION: 02
// COURSE: JAVASCRIPT
// TITLE:THIS PROGRAM INTENDS TO  CHECK ENTERED NUMBER IS BUZZ OR FIIZZ OR FIZZBUZZ.


for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // If the number is not divisible by 3 or 5, print the number itself
    else {
        console.log(i);
    }
}
