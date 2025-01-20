/**
 * Given a string s and an integer k, return true if you can use all the 
 * characters in s to construct k palindrome strings or false otherwise.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length < k) return false;
    
    let countArr = Array(26).fill(0);
    for (const char of s) {
        countArr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let odd = 0;
    for (const count of countArr) {
        if (count % 2 !== 0) 
            odd++;
    }
    
    return odd <= k;
    
};