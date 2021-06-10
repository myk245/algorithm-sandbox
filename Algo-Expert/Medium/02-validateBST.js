/* each node has a minimum value and a maximum value
traverse through entire BST starting from root node
move down from root to validate all subtrees (check if all of the subtrees' nodes are wrapped between their min and max value) 
do this until we reach a leaf node without any child nodes (null value)
*/

// O(n) time / O(d) space where d is the depth of the tree

// wrapper function
function validateBST(node) {
   // min and max value initialized as -Inf and Inf
   return validateHelper(node, -Infinity, Infinity);
}

// recursive helper function
// passes in a minValue and a maxValue
function validateHelper(node, minValue, maxValue) {
   // if we are at a leaf node, return true
   if (node === null) {
      return true;
   }

   // check that the current node's value is between the min and max values
   // if not, return false -> invalid BST
   if (node.value < minValue || node.value >= maxValue) {
      return false; 
   }

   // check left and right subtrees, updating the max and min values
   return validateHelper(node.left, minValue, node.value) && validateHelper(node.right, node.value, maxValue)
}