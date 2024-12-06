/**
 *
 * @param {number} a
 * @param {number} b
 * @returns whichever int value is closest to 10, or 0 if it's a tie.
 */
export default function close10(a, b) {
  // Get absolute value of a and 10
  const aAbs = Math.abs(a - 10);
  // Get absolute value of b and 10
  const bAbs = Math.abs(b - 10);

  // If the absolute values are equal return 0
  // If the absolute of a is less than b return a
  // else return b
  if (aAbs === bAbs) {
    return 0;
  } else if (aAbs < bAbs) {
    return a;
  } else {
    return b;
  }
}
