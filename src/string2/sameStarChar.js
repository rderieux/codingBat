/**
 *
 * @param {string} str
 * @returns true for each appearance of a star '*', where there is a char before and after,
 * and those chars are equal, otherwise returns false.
 */
export default function sameStarChar(str) {
  // Guard against non string arg
  // initialize a trueState variable, set value to true for empty strings,
  // and strings without stars
  // loop through the 'str'
  // if the current index is '*', the current index - 1 is not undefined
  // AND the current index + 1 is not undefined,
  // inner if the current index - 1 and index + 1 are equal return true
  // else return false
  if (typeof str !== "string") {
    return "error";
  }

  let trueState = true;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "*" &&
      str[i - 1] !== undefined &&
      str[i + 1] !== undefined
    ) {
      if (str[i - 1] === str[i + 1]) {
        trueState = true;
      } else {
        trueState = false;
      }
    }
  }
  return trueState;
}
