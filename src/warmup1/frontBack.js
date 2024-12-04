/*
Given a string, return a new string where the first and last chars 
have been exchanged.
*/

/**
 *
 * @param {string} str
 * @returns a string with the first and last character exchanged.
 */
export default function frontBack(str) {
  // If the string is less than 2 char, return string
  if (str.length < 2) {
    return str;
  }
  // Slice off the first character and store it
  const firstChar = str.slice(0, 1);
  // Slice off the last character and store it
  const lastChar = str.slice(-1);
  // Store everything but first and last char
  const missingHeadAndTailStr = str.slice(1, str.length - 1);
  // Prepend last character, append first character
  return lastChar + missingHeadAndTailStr + firstChar;
}
