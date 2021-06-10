/* each node has a minimum value and a maximum value
traverse through entire BST starting from root node
move down from root to validate all subtrees (check if all of the subtrees' nodes are wrapped between their min and max value) 
do this until we reach a leaf node without any child nodes (null value)
*/

// wrapper function
function validateBST(node) {
   return validateHelper(node, -Infinity, Infinity);
}

// recursive helper function
function validateHelper(node, minValue, maxValue) {
   if (node === null) {
      return true;
   }

   if (node.value < minValue || node.value >= maxValue) {
      return false; 
   }

   return validateHelper(node.left, minValue, node.value) && validateHelper(node.right, node.value, maxValue)
}