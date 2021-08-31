// Given a long integer, find the number of ways to represent it as a sum of two or more consecutive positive integers.

function consecutiveSum(num) {
   // input: num, an integer
   // output: number of ways to represent num as sum of two or more consecutive positive integers

   // we can think of num as a "subarray" of all of the numbers that precede it 
   // start at very beginning and have 2 "pointers" to expand/shrink our window
   let left = 1; // shrinks window
   let right = 2; // expands window 

   // keep track of current sum 
   let currentSum = left + right;
   
   // keep track of number of successful ways 
   let count = 0;
   
   // upper bound for this window has to be less than the num itself 
   while (right < num) {
      if (currentSum == num) {
         count++;
         // move left and right pointers to hit any other possible ways to sum to num 
         currentSum -= left; // shifting our window: subtract left from sum 
         left++;
         right++;
         currentSum += right; 
      }

      // if currentSum is less than num, expand the window  (keep adding to sum)
      if (currentSum < num) {
         right++;
         currentSum += right; 
      }

      // if currentSum is more than num, shrink the window 
      if (currentSum > num) {
         currentSum -= left;
         left++; 
      } 
   }
   return count; 
}