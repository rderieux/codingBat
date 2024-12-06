/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns the largest of 3 ints.
 */
export default function intMax(a, b, c) {
  // Create variable to assign largest int
  // if a is greater than or equal b, assign to largest int
  // if a is greater than or equal c, assign to largest int
  // if b is greater than or equal a, assign to largest int
  // if b is greater than or equal c, assign to largest int
  // if c is greater than or equal a, assign to largest int
  // if c is greater than or equal b, assign to largest int
  // return largest int
  let largestInt;
  if (a >= b && a >= c) {
    largestInt = a;
  } else {
    if (b >= a && b >= c) {
      largestInt = b;
    } else {
      if (c >= a && c >= b) {
        largestInt = c;
      }
      return largestInt;
    }
  }
  return largestInt;
}
