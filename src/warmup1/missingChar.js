/*
Given a non-empty string and an int n, return a new string where 
the char at index n has been removed. The value of n will be a valid 
index of a char in the original string (i.e. n will be in the range 
0..str.length()-1 inclusive).
*/

/**
 *
 * @param {string} str
 * @param {number} n index of character in string
 * @returns a string with the index of n character removed.
 */
export default function missingChar(str, n) {
  return str.slice(0, n) + str.slice(n + 1);
}
