/**
 *
 * @param {number} a
 * @param {number} b
 * @returns true if a or b is between 10 - 20 inclusive.
 */
export default function in1020(a, b) {
  // If a is 10-20 or b is 10-20 return true, else false
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
    return true;
  } else {
    return false;
  }
}
