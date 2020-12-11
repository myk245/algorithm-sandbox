// initialize a 3 element long sorted array for the 3 largest numbers traverse through the main array and for each number check if it is larger than the largest number (third element in the threeLargest array) shift and update the threeLargest array accordingly

function findThreeLargestNumbers(array) {
   const threeLargest = [null, null, null];

   for (const num of array) {
      updateLargest(threeLargest, num)
   }
   return threeLargest;
}

// checking each number against each element in threeLargest array
function updateLargest(threeLargest, num) {
   if (threeLargest[2] === null || num > threeLargest[2]) {
      shiftAndUpdate(threeLargest, num, 2);
   } else if (threeLargest[1] === null || num > threeLargest[1]) {
      shiftAndUpdate(threeLargest, num, 1);
   } else if (threeLargest[0] === null || num > threeLargest[0]) {
      shiftAndUpdate(threeLargest, num, 0);
   }
}

// traverse the threeLargest array and at each index check
// if the passed in index is equal to the current index 
// if no, shift the value of the next element over to the left
// if yes, replace the current value with the passed in number
function shiftAndUpdate(array, num, index) {
   for (let i = 0; i <= index; i++) {
      if (i === index) {
         array[i] = num;
      } else {
         array[i] = array[i + 1];
      }
   }
}