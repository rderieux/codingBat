/**
 *
 * @param {number} a
 * @param {number} b
 * @returns true if the last digit of both numbers match, else false.
 */
export default function lastDigit(a, b) {
  // Convert a and b ints to strings
  // compare last char of both strings
  // if they match return true, else false
  const aString = a.toString();
  const bString = b.toString();

  if (aString.slice(-1) === bString.slice(-1)) {
    return true;
  } else {
    return false;
  }
}
