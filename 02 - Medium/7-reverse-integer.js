/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 * 
 * Constraints:
 * -231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let sign = x < 0 ? -1 : 1;
  let rev = 0;
  let abs = Math.abs(x);
  let bit = Math.pow(2, 31);
  while (abs > 0) {
      let digit = abs % 10;
      if ((sign * rev < (-bit - digit) / 10) || (sign * rev > (bit - 1 - digit) / 10)) {
          return 0;
      } else {
          rev = rev * 10 + digit;
          abs = Math.floor(abs / 10);
      }

  }
  return sign * rev;
};