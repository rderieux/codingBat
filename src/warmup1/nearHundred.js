//Given an int n, return true if it is within 10 of 100 or 200

/**
 *
 * @param {number} n
 * @returns true if the absolute difference between n and 100
 * or n and 200 is 0 to 10
 */
export default function nearHundred(n) {
  // if n is less than 100, n - 100 else 100 - n to get absolute number
  // if n is less than 200 and greater than 110,
  // n - 200 else 200 - n to get absolute number
  if (n <= 110 && n >= 90) {
    return true;
  } else if (n <= 210 && n >= 190) {
    return true;
  } else {
    return false;
  }
}
