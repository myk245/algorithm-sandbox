// Binary Search Tree
class BST {
   constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
   }

   // Average: O(log(n)) time & space
   // Worst: O(n) time & space
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

   // Average: O(log(n)) time & space
   // Worst: O(n) time & space
   contains(value) {
      if (value < this.value) {
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
      } else {
         return true;
      }
   }

   // Average: O(log(n)) time & space
   // Worst: O(n) time & space
   remove(value, parent = null) {
      if (value < this.value) {
         if (this.left !== null) {
            this.left.remove(value, this);
         }
      } else if (value > this.value) {
         if (this.right !== null) {
            this.right.remove(value, this);
         }
      } else {
         if (this.left !== null && this.right !== null) {
            this.value = this.right.getMinValue();
            this.right.remove(this.value, this);
         } else if (parent === null) {
            if (this.left !== null) {
               this.value = this.left.value;
               this.right = this.left.right;
               this.left = this.left.left;
            } else if (this.right !== null) {
               this.value = this.right.value;
               this.left = this.right.left;
               this.right = this.right.right;
            } else {
               // single node tree, so do nothing
            }
         } else if (parent.left === this) {
            parent.left = this.left !== null ? this.left : this.right;
         } else if (parent.right === this) {
            parent.right = this.left !== null ? this.left : this.right;
         }
      }
      return this;
   }

   getMinValue() {
      if (this.left === null) {
         return this.value;
      } else {
         return this.left.getMinValue();
      }
   }
}