/**
 *
 * @param {string} str
 * @returns true if the first two and last two chars are equal, else false.
 */
export default function frontAgain(str) {
  // Guard against non string arg
  // if string length is less than 2 return false
  // slice first two and last two chars, assign to variables
  // if variables are equal, return true, else return false
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length < 2) {
    return false;
  }

  const firstTwoChars = str.slice(0, 2);
  const lastTwoChars = str.slice(-2);

  if (firstTwoChars === lastTwoChars) {
    return true;
  } else {
    return false;
  }
}
