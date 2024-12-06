/**
 *
 * @param {number} a
 * @param {number} b
 * @returns the largest int between 10 and 20 inclusive,
 * or the int in that range, or 0 if none are in the range.
 */
export default function max1020(a, b) {
  // If a and b is between 10 and 20 inclusive
  // return a if it's greater than b, else return b
  // if a is between 10 and 20 but not b, return a
  // if b is between 10 and 20 but not a, return b
  // else return 0
  if (a >= 10 && a <= 20 && b >= 10 && b <= 20) {
    return a > b ? a : b;
  } else if (a >= 10 && a <= 20 && (b < 10 || b > 20)) {
    return a;
  } else if (b >= 10 && b <= 20 && (a < 10 || a > 20)) {
    return b;
  } else {
    return 0;
  }
}
