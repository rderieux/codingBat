/**
 *
 * @param {string} a
 * @param {string} b
 * @returns a string of alternating chars of a, then b until one string ends,
 * then returns the leftover chars of the longer string.
 */
export default function mixString(a, b) {
  // Guard against non string args
  // Declare a result string
  // Find the larger of the two strings
  // loop through the strings, using largerString length as the limit
  // if the current index of string 'a' is not undefined, add to result string
  // if the current index of string 'b' is not undefined, add to result string
  // return result string
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }

  let resultString = "";
  const longerString = a.length > b.length ? a : b;

  for (let i = 0; i < longerString.length; i++) {
    if (a[i] !== undefined) {
      resultString += a[i];
    }
    if (b[i] !== undefined) {
      resultString += b[i];
    }
  }
  return resultString;
}
