/**
 *
 * @param {string} str
 * @returns true if each appearance of 'g' is preceded or followed by a 'g', else false.
 */
export default function gHappy(str) {
  // Guard against non string arg
  // if str is an empty string, return true
  // if str is less than 2 return false
  // loop through 'str', if index is 'g'
  // AND index + 1 is not 'g',
  // OR index - 1 is not 'g', return false
  // else return true
  if (typeof str !== "string") {
    return "error";
  }
  if (str === "") {
    return true;
  }
  if (str.length < 2) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    const strSlice = str.slice(i - 1, i + 2);
    if (
      i > 0 &&
      strSlice[1] === "g" &&
      strSlice[0] !== "g" &&
      strSlice[2] !== "g"
    ) {
      return false;
    }
  }
  return true;
}
