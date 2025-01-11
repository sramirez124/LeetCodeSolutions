// class Solution {
//     public:
//         bool isPalindrome(x) {
            
//         }
    
        
//     };

/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

function isPalindrome(x) {
    let input = x
    let reversed = 0;
    let sign = x < 0 ? -1 : 1; // Handle negative numbers
  
    x = Math.abs(x); // Work with the absolute value
  
    while (x > 0) {
      reversed = reversed * 10 + x % 10;
      x = Math.floor(x / 10);
    }
  
    x = reversed * sign;

    console.log(`Input number is: ${input}`)
    if (x === input) {
      return `${x} is a palindrome.`;
    } else {
      return `${x} is not a palindrome.`;
    }
}

// console.log(isPalindrome(-123)) // -123 is not a palindrome.
console.log(isPalindrome(-121)) // 121 is a palindrome.

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     let input = x
//     let reversed = 0;
//     let sign = x < 0 ? -1 : 1; // Handle negative numbers
  
//     x = Math.abs(x); // Work with the absolute value
  
//     while (x > 0) {
//       reversed = reversed * 10 + x % 10;
//       x = Math.floor(x / 10);
//     }
  
//     x = reversed * sign;
    
//     console.log(`Input number is: ${input}`)
//     if (x === input) {
//       return `${x} is a palindrome.`;
//     } else {
//       return `${x} is not a palindrome.`;
//     }
// };