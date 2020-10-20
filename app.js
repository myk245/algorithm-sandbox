// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index. Write a function getProductsOfAllIntsExceptAtIndex that takes an array of integers and returns an array of the products.


// First get the products of all the integers before each index. Then go backwards and get the products of all the integers after each index. 
function getProductsOfAllIntsExceptAtIndex(intArray) {
   // edge case: if integer has less than 2 integers, there is no product to return
   if (intArray.length < 2) {
      throw new Error('Getting the product of numbers at other indices requires at least 2 numbers!');
   }

   const productsOfAllIntsExceptAtIndex = []; 

   // For each integer, we find the product of all the integers before it, storing the total product so far each time. 
   let productSoFar = 1; 
   for (let i = 0; i < intArray.length; i++) {
      productsOfAllIntsExceptAtIndex[i] = productSoFar;
      productSoFar *= intArray[i];
   }

   // For each integer find the product of all the integers after it. Since each index in products already has the product of all the integers before it, now we're storing the total product of all other integers.
   productSoFar = 1; 
   for (let j = intArray.length - 1; j >= 0; j--) {
      productsOfAllIntsExceptAtIndex[j] *= productSoFar;
      productSoFar *= intArray[j];
   }

   return productsOfAllIntsExceptAtIndex; 
}

// Test solution
let testArray = [1, 2, 6, 5, 9];
console.log(getProductsOfAllIntsExceptAtIndex(testArray)); // [540, 270, 90, 108, 60] 