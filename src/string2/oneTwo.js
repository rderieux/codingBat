/**
 *
 * @param {string} str
 * @returns a string where the first char comes after the next two chars,
 * 'abc' becomes 'bca'.  Repeats this process through the 'str'.  Ignores
 * any group fewer than 3 chars at the end.
 */
export default function oneTwo(str) {
  // Guard against non string arg
  // initialize a resultString variable, set value to empty string
  // loop through str, iterate by 4, if index plus 3 is not undefined
  // add index + 1 and index + 2 to resultString,
  // add index to resultString, return resultString
  if (typeof str !== "string") {
    return "error";
  }

  let resultString = "";

  for (let i = 0; i < str.length; i += 3) {
    if (str[i + 2] !== undefined) {
      resultString += str[i + 1];
      resultString += str[i + 2];
      resultString += str[i];
    }
  }
  return resultString;
}
