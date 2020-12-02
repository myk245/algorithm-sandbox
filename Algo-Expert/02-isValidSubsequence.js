// O(n) time / O(1) space -- where n is the length of the main array
// initialize two pointers: one for the main array and one for the potential subsequence array
// beginning with the first integer in main array, check if it is the same as the first integer in 
// potential subsequence array; if yes, move both pointers and do the same thing; 
// if no, move just the main array pointer
function isValidSubsequence(array, sequence) {
   let arrayIndex = 0;
   let sequenceIndex = 0;
   while (arrayIndex < array.length && sequenceIndex < sequence.length) {
      if (array[arrayIndex] === sequence[sequenceIndex]) {
         sequenceIndex++;
      }
      arrayIndex++;
   }
   return sequenceIndex === sequence.length;
}

// O(n) time / O(1) space -- where n is the length of the main array
// iterate through the main array and look for the first number 
// in the potential subsequence -- if you find the first number, 
// iterate through the array again, looking for the second integer and so on 
function isValidSubsequence(array, sequence) {
   let sequenceIndex = 0;
   for (let i = 0; i < array.length; i++) {
      if (sequenceIndex === sequence.length) {
         break;
      }
      if (sequence[sequenceIndex] == array[i]) {
         sequenceIndex++;
      }
   }
   return sequenceIndex === sequence.length;
}