// input: integer, n
// output: integer, min # of steps to 1 with ops -1, /2, /3
// constraints: n >= 1 

// O(n) space / O(k^n) time
function minStepsToOne(n) {
   
   function recurse(curr) {
      // base case
      if (curr === 1) {
         return 0; 
      }

      // recursive relations
      // subtract 1 
      let steps = recurse(curr - 1)
      
      // divide by 2
      if(curr % 2 === 0) {
         let divby2 = recurse(curr / 2);
         steps = Math.min(steps, divby2)
      }

      // divide by 3
      if(curr % 3 === 0) {
         let divby3 = recurse(curr / 3);
         steps = Math.min(steps, divby3)
      }
      // return min # of steps to 1 from curr
      return 1 + steps; 
   }

   let res = recurse(n);
   return res; 
}

// memoization
function minStepsToOne(n) {
   let cache = {};
   
   function recurse(curr) {
      // base case
      if (curr === 1) {
         return 0;
      }

      // check cache 
      if (curr in cache) {
         return cache[curr];
      }

      // recursive relations
      // subtract 1 
      let steps = recurse(curr - 1)

      // divide by 2
      if (curr % 2 === 0) {
         let divby2 = recurse(curr / 2);
         steps = Math.min(steps, divby2)
      }

      // divide by 3
      if (curr % 3 === 0) {
         let divby3 = recurse(curr / 3);
         steps = Math.min(steps, divby3)
      }
      // return min # of steps to 1 from curr
      let result = 1 + steps;
      // store result in cache 
      cache[curr] = result;
      
      return result;
   }

   let res = recurse(n);
   return res;
}

console.time("Brute Force Recursion: "); 
console.log(minStepsToOne(10));
console.timeEnd("Brute Force Recursion: ")


