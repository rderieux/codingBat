/**
 *
 * @param {number} a
 * @param {number} b
 * @returns the sum of a and b unless the numbers match
 * otherwise returns double the sum
 */
function sumDouble(a, b) {
  if (a === b) {
    return (a + b) * 2;
  } else {
    return a + b;
  }
}

module.exports = sumDouble;
