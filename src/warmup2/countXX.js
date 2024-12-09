/**
 *
 * @param {string} str
 * @returns a count of the number of times 'xx' appears in a string.
 * Case does not matter.
 */
export default function countXX(str) {
  // Declare a new int variable and assign a 0 value
  // loop through the provided str, adding to count
  // each time 'xx' appears, return count
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (
      str.slice(i, i + 2) === "xx" ||
      str.slice(i, i + 2) === "XX" ||
      str.slice(i, i + 2) === "xX" ||
      str.slice(i, i + 2) === "Xx"
    ) {
      count += 1;
    }
  }
  return count;
}
