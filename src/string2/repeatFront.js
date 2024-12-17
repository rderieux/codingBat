/**
 *
 * @param {string} str
 * @param {number} n
 * @returns a string of the front of 'str' 'n' number of chars, 'n' number of repeats.
 * Each repeat is one less char of the front of 'str'.
 */
export default function repeatFront(str, n) {
  // Guard against incorrect types
  // initialize a result string with the value of an empty string
  // reassign n to a limit variable
  // create a loop with a limit of the limit variable
  // initialize a string slice from index 0 to 'n' of 'str'
  // concatenate string slice to result string
  // each loop subtract one from 'n'
  // return result string
  if (typeof str !== "string" || typeof n !== "number") {
    return "error";
  }

  let resultString = "";
  const limit = n;

  for (let i = 0; i < limit; i++) {
    const strSlice = str.slice(0, n);
    resultString += strSlice;
    n -= 1;
  }
  return resultString;
}
