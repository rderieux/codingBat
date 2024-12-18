/**
 *
 * @param {string} str
 * @returns the string that is between the first and last appearance of 'bread'
 * in the given string, or '' if there aren't two pieces of bread.
 */
export default function getSandwich(str) {
  // Guard against non string arg
  // initialize startOfMiddle, set value to 0
  // initialize endOfMiddle, set value to 0
  // loop through str, starting at front , stop if startOfMiddle is greater than 0
  // if current index through index + 4 equals "bread"
  // reassign startOfMiddle to index + 5
  // loop through str, starting at end, stop if endOfMiddle is greater than 0
  // if current index through index -4 equals "daerb"
  // reassign endOfMiddle to index - 5
  // if startOfMiddle equals endOfMiddle, return empty string
  // else return str slice from startOfMiddle through endOfMiddle
  if (typeof str !== "string") {
    return "error";
  }

  let startOfMiddle = 0;
  let endOfMiddle = 0;

  for (let i = 0; i <= str.length - 5; i++) {
    if (
      str[i] === "b" &&
      str[i + 1] === "r" &&
      str[i + 2] === "e" &&
      str[i + 3] === "a" &&
      str[i + 4] === "d"
    ) {
      startOfMiddle = i + 5;
      break;
    }
  }
  for (let i = str.length - 1; i >= 0; i--) {
    if (
      str[i] === "d" &&
      str[i - 1] === "a" &&
      str[i - 2] === "e" &&
      str[i - 3] === "r" &&
      str[i - 4] === "b"
    ) {
      endOfMiddle = i - 4;
      break;
    }
  }

  if (startOfMiddle >= endOfMiddle) {
    return "";
  } else {
    return str.slice(startOfMiddle, endOfMiddle);
  }
}
