/*
Given a string, take the last char and return a new string with the 
last char added at the front and back, so 'cat' yields 'tcatt'. 
The original string will be length 1 or more.
*/

/**
 *
 * @param {string} str
 * @returns a string with the last char prepended and appended.
 */
export default function backAround(str) {
  const lastChar = str.slice(-1);
  return lastChar + str + lastChar;
}
