function solution(X, Y, D) {
   // find difference between X and Y
   // divide the difference by 10
   // round up
   let minimalJumps = Math.ceil(((Y - X) / D));
   return minimalJumps;
}