class BST {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }

   insert(value) {
      // compare value to current node value
      if (value < this.value) {
         // if value is less than current node value, insert to left of root
         // first check if left node already exists
         if (this.left === null) {
            // if left subtree is null (we are at the end of a branch), add a new BST
            this.left = new BST(value);
         } else {
            // if left subtree does exist, insert the value here
            this.left.insert(value);
         }
      } else {
         if (this.right === null) {
            this.right = new BST(value);
         } else {
            this.right.insert(value);
         }
      }
      return this;
   }

   contains(value) {
      if (value = this.value) {
         return true;
      } else if (value < this.value) {
         if (this.left === null) {
            return false;
         } else {
            // return true or false depending if the value is found
            return this.left.contains(value);
         }
      } else if (value > this.value) {
         if (this.right === null) {
            return false;
         } else {
            return this.right.contains(value);
         }
      }
   }
}