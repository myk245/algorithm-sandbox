function almostIncreasingSequence(sequence) {
   // keep track of how many elements have to be removed from sequence
   let elementsToRemove = 0;
   for (let i = 0; i < sequence.length; i++) {
      // if element is less than or equal to one before it, increase elementsToRemove
      if (sequence[i] <= sequence[i - 1]) {
         elementsToRemove++;
         // we know we have to remove either the num at index i or the index at i - 1 
         // will removing sequence[i] fix the surrounding items?            // if no, we also have to check if removing sequence[i + 1] fix the surrounding items
         // if no, we automatically know that it will take more than 1 element to be removed for sequence to be increasing, so return false
         if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
            return false;
         }
      }
   }
   // return true or false depending on whether this 1 or fewer elements that need to be removed to satisfy requirement
   return elementsToRemove <= 1;
}