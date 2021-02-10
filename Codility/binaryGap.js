// write a function that given a positive integer, returns the length of its longest binary gap - return 0 if integer doesn't contain a binary gap

// O(n) time 
function solution(N) {
   let binaryRep = N.toString(2) // returns a string 
   let currentGap = 0;
   let biggestGap = 0;

   for (let i = 0; i < binaryRep.length; i++) {
      // the start of a binary gap has to be a '0', so we only increase current binary gap once we come upon our first '0'
      if (binaryRep[i] === '0') {
         currentGap++;
         // if we come upon a '1', this represents the end of a gap, so compare current gap against biggest gap
      } else if (binaryRep[i] === '1') {
         if (currentGap > biggestGap) {
            biggestGap = currentGap;
         }
         // reset current gap
         currentGap = 0;
      }
   }
   return biggestGap;
}

