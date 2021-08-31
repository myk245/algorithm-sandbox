function carParkingRoof(cars, k) {
   // cars is an array representing a parked car and its position 
   // k is the min number of cars currently parked that need to be covered by the roof
   // we want to find the length of the shortest roof that meets this requirement

   // sort the array first
   let sortedCars = cars.sort((a, b) => (a - b));
   
   // sliding window with left pointer at smallest index of array
   let left = 0;
   
   let minLength = Number.MAX_VALUE;
   
   // loop through cars array and stop when we meet the condition specifying min num of cars covered
   // right pointer represents upper bound of covered cars 
   for (let right = 0; right < sortedCars.length - k + 1; right++) {
      // expand the window until we have k cars
      // at min, k number of cars in our array have to be covered
      // we want to find the minLength 
      minLength = Math.min(minLength, sortedCars[right + k - 1] - sortedCars[right]);
   }
   return minLength + 1; 
}