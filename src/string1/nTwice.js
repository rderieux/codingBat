/**
 *
 * @param {string} str
 * @param {number} n
 * @returns a string of the front and back of the strings
 * n number of indexes.
 */
export default function nTwice(str, n) {
  // Guard against non strings, and non int
  // if n equal zero return empty string
  // slice the string index[0] to index[n]
  // and assign to a variable
  // slice the string from end to - n
  // and assign to a variable
  // concat the two strings and return
  if (typeof str !== "string" || typeof n !== "number") {
    return "error";
  }
  if (n === 0) {
    return "";
  }
  const frontStrToN = str.slice(0, n);
  const endStrToN = str.slice(-n);

  return frontStrToN + endStrToN;
}
