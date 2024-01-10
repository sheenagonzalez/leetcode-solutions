/**
 * Given a string s, find the length of the longest 
  substring
  without repeating characters.

  

  Example 1:

  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
  Example 2:

  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
  Example 3:

  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
  

  Constraints:

  0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let seen = {}; // Hash map storing all the letters we've seen and the index where they have been seen last
  let start = 0; // Start index of current substring
  let maxLen = 0; // The result
for (let i = 0; i < s.length; i++) {
      let c = s[i];
      // Check if we've seen the letter before in our current substring
      if (seen[c] >= start) {
          // Move the start index to the index of the letter next to the last repeating letter
          start = seen[c] + 1;
      }
      seen[c] = i; // Set current letter to the current index in seen
      let currLen = i - start + 1; // Take the distance between start and current index to find length of current substring
      maxLen = Math.max(currLen, maxLen); // Reevaluate max length
  }
  // Return max length
  return maxLen;
};