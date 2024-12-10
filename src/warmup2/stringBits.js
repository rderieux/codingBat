/**
 *
 * @param {string} str
 * @returns a str with every other char, starting with str[0]
 */
export default function stringBits(str) {
  // Create a new str
  // loop through given str, iterate by 2,
  // push each iteration to new str
  // return new str
  let everyOtherChar = "";
  for (let i = 0; i < str.length; i += 2) {
    everyOtherChar += str[i];
  }
  return everyOtherChar;
}
