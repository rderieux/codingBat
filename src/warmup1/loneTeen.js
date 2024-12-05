/**
 *
 * @param {number} a
 * @param {number} b
 * @returns true if a or b is in range of 13-19 inclusive, else false.
 */
export default function loneTeen(a, b) {
  // If a is greater than 12 and less than 20
  // and b is greater than 12 and less than 20
  // then false, else true
  if (a >= 13 && a <= 19 && b >= 13 && b <= 19) {
    return false;
  } else if (a >= 13 && a <= 19) {
    return true;
  } else if (b >= 13 && b <= 19) {
    return true;
  } else {
    return false;
  }
}
