const { SwapCalls } = require("@material-ui/icons");

function findClosestValueInBst(tree, target) {
   let isSorted = false; 
   let counter = 0; 
   while (!isSorted) {
      isSorted = true; 
      for (let i = 0; i < array.length - 1 - counter; i++) {
         if (array[i] > array[i + 1]) {
            const temp = array[j]; 
            array[j] = array[i]; 
            array[i] = temp; 
            isSorted = false; 
         }
      }
      counter++;
   }
   return array;
}

