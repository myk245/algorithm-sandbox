// O(n^2) time / O(1) space

// start with a sorted and unsorted sub - list
// sorted is initially empty
function selectionSort(array) {
   // i will represent index of left-most number in unsorted list
   for (let i = 0; i < array.length - 1; i++) {
      // set index of smallest element of sub-list to index of number at current iteration 
      let smallestIndex = i;
      // j will represent index of adjacent number in unsorted list
      for (let j = i + 1; j < array.length; j++) {
         // compare current number to adjacent number
         if (array[smallestIndex] > array[j]) {
            // make current iteration of j the new smallest index
            smallestIndex = j;
         }
      }
      // after we get out of the second for loop, we have the index of the smallest element in the array
      // now we can swap the elements
      const temp = array[i];
      array[i] = array[smallestIndex];
      array[smallestIndex] = temp;
   }
   return array;
}