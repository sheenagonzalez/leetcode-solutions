/**
 * Given a string s, return the longest palindromic substring in s.
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start, end, j, palindrome;
  let longest = s[0];
  // Iterate through the index i of each letter
  for (let i = 0; i < s.length; i++) {
      // Keep track of start and end of the substring, expanding from the center if a palindrome is found
      start = i;
      end = i + 1;
      j = i + 1; // Keep track of the index j to iterating through all the letters that are the same as the current middle letter
      palindrome = '';
      // Iterate through the index j of each letter after i that are the same letter 
      while (s[i] == s[j] && s[j] != undefined) {
          end = j;
          j++;
          // Move i to the center of the palindrome
          if (s[j] == undefined && i < s.length) {
              i += Math.floor(j/2);
          }
      }
      // Move the start point to i-1 for odd-length palindromes
      if (s[i] != s[i+1]) {
          start = i - 1;
      }
      // Expand the palindrome from the center
      while ((s[start] == s[end]) && (end < s.length)) {
          palindrome = s.slice(start, end+1);
          if (palindrome.length > longest.length) {
              longest = palindrome;
          }
          start--;
          end++;
      }
      // If all the remaining letters are the same, end loop
      if (j == s.length) {
          break;
      }
  }
  // Return the longest palindrome
  return longest;
  
};