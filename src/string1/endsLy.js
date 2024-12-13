/**
 *
 * @param {string} str
 * @returns true if provided string ends with 'ly', else false.
 */
export default function endsLy(str) {
  // Guard against non strings
  // if string is less than 2 return false
  // if last two chars of string are 'ly' return true
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length < 2) {
    return false;
  } else {
    if (str.slice(str.length - 2) === "ly") {
      return true;
    } else {
      return false;
    }
  }
}
