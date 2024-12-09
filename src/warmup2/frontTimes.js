/**
 *
 * @param {string} str
 * @param {number} n
 * @returns a str of the first 3 chars of provided str,
 * repeating n number of times.  Whatever is there repeating n times,
 * if less then 3 chars.
 */
export default function frontTimes(str, n) {
  // If the str is less than 3, loop through n times
  // adding the str to a new str variable
  // if the str is 3 or more, assign the first 3 chars
  // to a variable, loop n times adding to the new variable each time
  let result = "";
  if (str.length < 3) {
    for (let i = 0; i < n; i++) {
      result += str;
    }
  } else {
    const firstThreeChars = str.slice(0, 3);
    for (let i = 0; i < n; i++) {
      result += firstThreeChars;
    }
  }
  return result;
}
