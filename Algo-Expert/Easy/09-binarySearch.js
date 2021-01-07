// O(log(n)) time / O(1) space
function binarySearch(array, target) {
   let leftIndex = 0;
   let rightIndex = array.length - 1;

   while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      if (array[middleIndex] === target) {
         return middleIndex;
         // if num is larger than target, move right index to left of middleIndex
      } else if (array[middleIndex] > target) {
         rightIndex = middleIndex - 1;
         // if num is lower than target, move left index to the right of middleIndex
      } else if (array[middleIndex] < target) {
         leftIndex = middleIndex + 1;
      }
   }
   return -1;
}