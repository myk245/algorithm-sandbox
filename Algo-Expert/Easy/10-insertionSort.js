// Best: O(n) time / O(1) space
// Average/Worst: O(n^2) time / O(1) space
function insertionSort(array) {
   // we can skip index 0 since an array of 1 element is already sorted
   for (let i = 1; i < array.length; i++) {
      // current is first element of unsorted sub-array
      let current = array[i];
      // j represents the index of last element in our tentatively sorted sub-array
      let j = i - 1;
      // iterate from right to left through tentatively sorted sub-array to find where 
      // the current number should be placed 
      while (j >= 0 && array[j] > current) {
         // shift last element of sorted sub-array over to the right
         array[j + 1] = array[j];
         // compare current to next element in sorted sub-array
         j = j - 1;
      }
      array[j + 1] = current;
   }
   return array;
}