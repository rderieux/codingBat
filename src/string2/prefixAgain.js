/**
 *
 * @param {string} str
 * @param {number} n
 * @returns true if front of str 'n' number of chars appears later in the string,
 * else false.
 */
export default function prefixAgain(str, n) {
  // Guard against incorrect types
  // initialize prefix the value of str to the n index
  // loop through str, starting at 'n' index
  // if loop at index to index plus 'n' equals prefix, return true
  // else return false
  if (typeof str !== "string" || typeof n !== "number") {
    return "error";
  }

  const prefix = str.slice(0, n);

  for (let i = n; i < str.length; i++) {
    if (str.slice(i, i + n) === prefix) {
      return true;
    }
  }
  return false;
}
