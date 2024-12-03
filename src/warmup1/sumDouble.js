/**
 *
 * @param {number} a
 * @param {number} b
 * @returns the sum of a and b unless the numbers match
 * otherwise returns double the sum
 */
export default function sumDouble(a, b) {
  if (a === b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
}
