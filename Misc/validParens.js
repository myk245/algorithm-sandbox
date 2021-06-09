// Given a string s of '(' , ')' and lowercase English characters. 

// Your task is to remove the minimum number of parentheses('(' or ')', in any positions) so that the resulting parentheses string is valid and return any valid string.

var minRemoveToMakeValid = function (s) {
   let stringArray = s.split('');
   // we need a way to keep track of the index of opening parentheses
   // so we can eventually remove the parenthesis at that index is necessary
   let stack = [];

   // loop through the string
   for (let i = 0; i < stringArray.length; i++) {
      // if we come upon an opening parenthesis
      if (stringArray[i] === '(') {
         // push the index of the opening parenthesis to our stack
         stack.push(i);
         // if we come upon a closing parenthesis
      } else if (stringArray[i] === ')') {
         // if the stack length is greater than 0, we have a matching closing parenthesis, so we can pop from our stack -> valid set of parentheses
         if (stack.length > 0) {
            stack.pop();
            // if there's nothing in our stack, then we know the closing parenthesis is invalid (has no matching opening parenthesis that comes before it), so we can replace the closing parenthesis with an empty string
         } else {
            stringArray[i] = '';
         }
      }
   }

   // loop through the stack (which contains the index of any invalid opening parentheses in our string) and replace the opening parenthesis at the index with an empty string
   for (let i of stack) {
      stringArray[i] = '';
   }

   // return string
   return stringArray.join('');
}
