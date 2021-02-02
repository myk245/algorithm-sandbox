// This is the class of the input root.
// Do not edit it.
class BinaryTree {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }
}

// return branch sums ordered from leftmost branch sum to rightmost branch sum
// O(n) space & time
function branchSums(root) {
   const sums = [];
   calculateBranchSums(root, 0, sums);
   return sums;
}

function calculateBranchSums(node, runningSum, sums) {
   if (!node) return;

   const newRunningSum = runningSum + node.value;

   if (!node.left && !node.right) {
      sums.push(newRunningSum);
      return;
   }

   calculateBranchSums(node.left, newRunningSum, sums);
   calculateBranchSums(node.right, newRunningSum, sums);
}