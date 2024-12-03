//Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns true if a, b, or a + b = 10, else false.
 */
export default function makes10(a, b) {
  //if a equals 10 or b equals 10 or a and b equals 10 return true
  //otherwise false
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  } else {
    return false;
  }
}
