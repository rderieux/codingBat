/**
 *
 * @param {string} str
 * @param {number} index
 * @returns a string length 2, starting from index.  If the index
 * is too big or too small to define a string length two,
 * use the first 2 chars of string.
 */
export default function twoChar(str, index) {
  // Guard against non str, and non number args
  // if index is greater than str, return first two chars
  // slice str from index number and next char, assign to variable
  // return slice variable
  if (typeof str !== "string" || typeof index !== "number") {
    return "error";
  }
  if (index > str.length || index + 2 > str.length || index < 0) {
    return str.slice(0, 2);
  } else {
    const twoFromIndex = str.slice(index, index + 2);
    return twoFromIndex;
  }
}
