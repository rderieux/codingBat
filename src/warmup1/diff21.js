/*
Given an int n, return the absolute difference between n and 21, 
except return double the absolute difference if n is over 21.
*/

/**
 *
 * @param {number} n
 * @returns the absolute value between n and 21,
 * unless 21 < n, then absolute value * 2.
 */
export default function diff21(n) {
  // If n is greater than 21 return the difference time two,
  // else return the absolute difference
  if (n > 21) {
    return (n - 21) * 2;
  } else {
    return 21 - n;
  }
}
