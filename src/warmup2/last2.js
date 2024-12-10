/**
 *
 * @param {string} str
 * @returns a count of how many times the last 2 chars of str appear
 * in the str, excluding the last occurance.
 */
export default function last2(str) {
  // Assign the last two chars of str to a new str
  // declare a count variable
  // loop through the string and compare the last 2
  // chars to current index, index + 1
  // subtract one from the count
  // return count
  const last2 = str.slice(-2);
  let count = 0;

  for (let i = 0; i < str.length - 2; i++) {
    if (str.slice(i, i + 2) === last2) {
      count += 1;
    }
  }

  return count;
}
