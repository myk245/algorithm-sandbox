function findGcd(a, b) {
   // if inputs are negative integers, convert to positive (GCD must be positive)
   if (a < 0) {
      a *= -1;
   }
   if (b < 0) {
      b *= -1;
   }

   // initialize a temp var
   let temp;
   // swap inputs if a < b 
   if (a < b) {
      temp = a;
      a = b;
      b = temp;
   }

   // use modulo to reduce the larger value until one number is zero 
   while (b > 0) {
      temp = b;
      b = a % b;
      a = temp;
   }

   // return the non zero value
   return a; 
}