// NAME: DEEPTI RAWAT
// STUDENT NUMBER: 0866723
// COURSE:JAVASCRIPT
// DATE: 31-1-2025
// ASSIGNMENT : QUESTION 2







function FilterAndCube(arr, num) {
    // Step 1: Filter out all elements that are less than the given number
    const filteredArray = arr.filter(element => element >= num);
  
    // Step 2: Cube the remaining elements by the given number
    const cubedArray = filteredArray.map(element => Math.pow(element, 3) * num);
  
    // Step 3: Return the modified array
    return cubedArray;
  }
  
  // Example usage:



  const array = [2, 4, 7, 10, 6];
  const number = 5;
  const result = FilterAndCube(array, number);
  
  console.log(FilterAndCube(array, number)); 
  
  
  