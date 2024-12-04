/*
Given 2 int values, return true if one is negative and one is positive. 
Except if the parameter "negative" is true, 
then return true only if both are negative.
*/

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {boolean} negative
 * @returns true when a or b is negative and neg is false,
 * if neg is true, both numbers need to be negative to return true,
 * otherwise false
 */
export default function posNeg(a, b, neg) {
  if (neg && a < 0 && b < 0) {
    return true;
  } else if (!neg && a < 0 && b < 0) {
    return false;
  } else if (!neg && (a < 0 || b < 0)) {
    return true;
  } else {
    return false;
  }
}
