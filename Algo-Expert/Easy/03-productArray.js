// loop through array and for each element, first check whether
// the element is an array -- if no, just add the element to the /// sum we are keeping track of; if yes, perform a recursive call /// so that we get the sum of the inner array and find how nested /// the array is

// O(n) time / O(d) -- where d = greatest depth of special arrays
function productSum(array, multiplier = 1) {
   let sum = 0;

   for (const element of array) {
      if (Array.isArray(element)) {
         sum += productSum(element, multiplier + 1);
      } else {
         sum += element;
      }
   }
   return sum * multiplier;
}