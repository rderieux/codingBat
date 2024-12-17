/**
 *
 * @param {string} a
 * @param {string} b
 * @returns true if the end of one string is equal to the end of the other.
 * Case doesn't matter.
 */
export default function endOther(a, b) {
  // Guard against non string args
  // find out which string is shorter and longer
  // if the strings are equal length, compare the whole string
  // compare the shorter string to the end of the longer string
  // if they match return true, else false
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }

  const shorterString = a.length < b.length ? a : b;
  const longerString = a.length > b.length ? a : b;
  const shorterLength = shorterString.length;
  if (a.length === b.length) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
  if (
    longerString.slice(-shorterLength).toLowerCase() ===
    shorterString.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}
