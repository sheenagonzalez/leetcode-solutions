/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */

 class Solution {
  public boolean canConstruct(String ransomNote, String magazine) {
      if (magazine.length() < ransomNote.length()) {
          return false;
      }
      HashMap<Character, Integer> magazineLetters = new HashMap<>();
      for (int i = 0; i < magazine.length(); i++) {
          Character mLetter = magazine.charAt(i);
          Integer mLetterCount = magazineLetters.get(mLetter);
          if (mLetterCount == null) {
              magazineLetters.put(mLetter, 1);
          } else {
              magazineLetters.put(mLetter, mLetterCount + 1);
          }
      }

      for (int i = 0; i < ransomNote.length(); i++) {
          Character rLetter = ransomNote.charAt(i);
          Integer mLetterCount = magazineLetters.get(rLetter);
          if (mLetterCount == null || mLetterCount <= 0) {
              return false;
          } else {
              magazineLetters.put(rLetter, mLetterCount - 1);
          }
      }
      return true;
  }
}

// time complexity = O(m)
// space complexity = O(1)