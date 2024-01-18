/**
 * Given an integer x, return true if x is a palindrome,
 * and false otherwise.
 * 
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * 
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * 
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 * 
 * Constraints:
 * -231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let s = x.toString();
  let result = true;
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
      if (s[start] != s[end]) {
          result = false;
          break;
      }
      start++;
      end--;
  }
  return result;
}

/** Follow up: Could you solve it without converting the integer to a string? */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function(x) {
  if (x < 0) return false;

  let result = true;
  let startDivider = Math.pow(10, Math.floor(Math.log10(x)));
  let startDigit, endDigit;
  while (startDivider > 9 || x > 9) {
      startDigit = Math.floor(x / startDivider);
      endDigit = x % 10;
      if (startDigit != endDigit) {
          return false;
      }
      x = Math.floor(x / 10) % (startDivider / 10);
      startDivider /= 100;
  }
  return result;
};