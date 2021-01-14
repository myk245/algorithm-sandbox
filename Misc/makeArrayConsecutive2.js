// given an array of numbers, how many numbers do we need at minimum to make the array consecutive
function makeArrayConsecutive2(statues) {
   let sorted = statues.sort((a, b) => (a - b));
   let smallest = sorted[0];
   let largest = sorted[sorted.length - 1];
   let lengthOfConsecutives = (largest - smallest) + 1;

   // find difference between what length of consecutive array is and the actual length of the given array
   return lengthOfConsecutives - statues.length;
}

// [6, 2, 3, 8]
// [2, 3, 6, 8]
// 8 - 2 = 6 => meaning for the array to be consecutive it needs to have a length of 7
// we need 4, 5, 7 => length needs to be 7
// length of current array = 4 
// 7 - 4 = 3 <- solution for this array
