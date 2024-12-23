/**
 *
 * @param {string} str
 * @returns the number of times that a character appears three times in a row.
 */
export default function countTriple(str) {
  // Guard against non string args
  // initialize tripleCount variable, set value to 0
  // loop through the 'str', if current index,
  // index + 1, and index + 2 are the same value
  // add to tripleCount, return tripleCount
  if (typeof str !== "string") {
    return "error";
  }

  // Handle edge cases
  if (str.length < 3) {
    return 0;
  }

  let tripleCount = 0;
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 1] && str[i] === str[i + 2]) {
      tripleCount++;
    }
  }
  return tripleCount;
}
