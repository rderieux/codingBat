/**
 *
 * @param {string} str
 * @returns a string of the first two chars of arg string three times.
 * Whatever is there if less than two.
 */
export default function extraFront(str) {
  // Guard against non string arg
  // if str is less than 2 return str concatenated three times
  // else slice off the first 2 chars into a new variable,
  // return concatenated variable three times
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length < 2) {
    return str + str + str;
  } else {
    const frontTwoChars = str.slice(0, 2);
    return frontTwoChars + frontTwoChars + frontTwoChars;
  }
}
