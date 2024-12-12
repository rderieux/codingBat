/**
 *
 * @param {string} str
 * @returns a string of the first two chars of provided string,
 * whatever is there if less than 2 chars.
 */
export default function firstTwo(str) {
  // Guard against non string arguments
  // if str is greater than or equal to 2
  // return the first two chars of the string
  // else return the string
  if (typeof str !== "string") {
    return "error";
  }
  return str.length >= 2 ? str.slice(0, 2) : str;
}
