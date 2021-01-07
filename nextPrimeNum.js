// prime number is a number greater than 1 that has no other factors other than itself and 1
function nextPrime(n) {
   if (n === 1) {
      return 2;
   } else if (n > 1) {
      // if n is itself a prime number, find the next largest

   }
}

// helper function to check if number is prime
function isPrime(number) {
   if (n === 2) {
      return true;
   } else if (n % 2 === 0) {
      return false;
   } else {
      // loop through numbers and check if there is one that is a factor of input num
      for (let i = 2; i < number; i++) {
         if (number % i === 0) {
            return false;
         }
      }
   }
   return true;
}