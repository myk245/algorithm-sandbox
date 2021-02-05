// write a function that given a positive integer, returns the length of its longest binary gap - return 0 if integer doesn't contain a binary gap

// function binaryGap(integer) {
//    // number.toString(2) outputs binary representation of number
//    console.log(integer.toString(2))
// }

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

