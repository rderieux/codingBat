/**
 *
 * @param {string} str
 * @returns true if the first instance of 'x' is followed by another 'x'
 * else returns false.
 */
export default function doubleX(str) {
  // Loop through the str and find the first x
  // if the first char after the x is another x
  // return true, else false
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].toLowerCase() === "x") {
      if (str[i + 1].toLowerCase() === "x") {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
}
