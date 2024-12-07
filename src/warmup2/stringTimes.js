/**
 *
 * @param {string} str
 * @param {number} n
 * @returns a str of a given str, n number of times.
 */
export default function stringTimes(str, n) {
  // Initialize an empty string
  // loop n times, adding str to a result variable each loop
  // return result
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
