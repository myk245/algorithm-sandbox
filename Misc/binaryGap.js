// write a function that given a positive integer, returns the length of its longest binary gap - return 0 if integer doesn't contain a binary gap

function solution(N) {
   let binaryRep = N.toString(2) // returns a string 
   let currentGap = 0;
   let biggestGap = 0;
   // loop through the binaryRep starting from the right-most digit
   for (let i = 0; i < binaryRep.length; i++) {
      // the start of a binary gap has to be a '0'
      if (binaryRep[i] === '0') {
         currentGap++;
         // if we come upon a '1', check if if it is 
      } else if (binaryRep[i] === '1') {
         if (currentGap > biggestGap) {
            biggestGap = currentGap;
         }
         currentGap = 0;
      }
   }
   return biggestGap;
}

function solution(N) {
   let binaryRep = N.toString(2).split(''); // each element of array is a string
   let oneCount = 0;
   // there is only a binary gap if there is more than 1 '1' 
   for (let i = 0; i < binaryRep.length; i++) {
      if (binaryRep[i] === '1') {
         oneCount++;
      }
   }
   // check if oneCount is more than 1 -- if yes, proceed to find longest binary gap
   if (oneCount > 1) {

   } else {
      return 0;
   }
}

