/**
 *
 * @param {string} str
 * @returns a string without the first two chars,
 * if the first two match last two.
 */
export default function without2(str) {
  // Guard against non string arg
  // slice off the first two chars in a variable
  // slice off the last two chars in a variable
  // if the two variables match, return string without first 2 chars
  // else return string
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length < 2) {
    return str;
  }

  const firstTwoChars = str.slice(0, 2);
  const lastTwoChars = str.slice(-2);
  if (firstTwoChars === lastTwoChars) {
    return str.slice(2);
  } else {
    return str;
  }
}
