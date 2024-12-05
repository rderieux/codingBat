/*
Return true if the given non-negative number is a 
multiple of 3 or a multiple of 5
*/

/**
 *
 * @param {number} n
 * @returns true if number is divisible by 3 or 5, otherwise false.
 */
export default function or35(n) {
  // If n divided by 3 does not have a remainder then true,
  // If n divided by 5 does not have a remainder then true
  // else false
  if (n % 3 === 0) {
    return true;
  } else if (n % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
