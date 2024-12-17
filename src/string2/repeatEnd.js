/**
 *
 * @param {string} str
 * @param {number} n
 * @returns a string of the last 'n' chars of 'str', repeated 'n' number of times.
 */
export default function repeatEnd(str, n) {
  // Guard against incorrect types
  // initialize a result string value to an empty string
  // create a loop with the limit of n
  // concatenate the 'str' last n chars of string, to result string each iteration
  // return result string
  if (typeof str !== "string" || typeof n !== "number") {
    return "error";
  }
  let resultString = "";
  for (let i = 0; i < n; i++) {
    resultString += str.slice(-n);
  }
  return resultString;
}
