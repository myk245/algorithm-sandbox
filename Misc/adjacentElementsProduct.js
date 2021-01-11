function adjacentElementsProduct(inputArray) {
   const adjacentProducts = [];

   for (let i = 0; i < inputArray.length - 1; i++) {
      adjacentProducts.push((inputArray[i]) * (inputArray[i + 1]))
   }
   return Math.max(...adjacentProducts);
}
