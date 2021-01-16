function shapeArea(n) {
   if (n === 1) {
      return 1;
   } else {
      return shapeArea(n - 1) + (4 * (n - 1));
   }
}

function shapeArea(n) {
   let area = 1;

   for (let i = 1; i < n; i++) {
      area += 4 * i;
   }
   return area;
}

