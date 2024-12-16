/**
 *
 * @param {string} str
 * @returns a string, if the first or second char is 'x',
 * returns string without them, otherwise returns string unchanged.
 */
export default function withoutX2(str) {
  // Guard against non string arg
  // if str[0] and str[1] are 'x', return string without them
  // if str[0] is 'x', return string without it
  // if str[1] is 'x', return string without it
  // else return str
  if (typeof str !== "string") {
    return "error";
  }

  if (str[0] === "x" && str[1] === "x") {
    const minusTwoFrontChars = str.slice(2);
    return minusTwoFrontChars;
  } else if (str[0] === "x") {
    const minusFrontChar = str.slice(1);
    return minusFrontChar;
  } else if (str[1] === "x") {
    const minusSecondChar = str[0] + str.slice(2);
    return minusSecondChar;
  } else {
    return str;
  }
}
