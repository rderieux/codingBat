/**
 *
 * @param {string} str
 * @param {boolean} front
 * @returns {string} the first char of the provided str,
 * unless front is false, then returns last char of str.
 */
export default function theEnd(str, front) {
  // Guard against bad args
  // if front is true, return substring of first char
  // else return substring of last char
  if (typeof str !== "string" || typeof front !== "boolean") {
    return "error";
  }
  if (front) {
    return str.substring(0, 1);
  } else {
    return str.substring(str.length - 1);
  }
}
