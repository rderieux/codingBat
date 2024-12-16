/**
 *
 * @param {string} str
 * @returns a string, if first or last chars are 'x', the string is returned
 * without them.  Otherwise string is returned without change.
 */
export default function withoutX(str) {
  // Guard against non string arg
  // if the first char and last char are 'x'
  // return string without them
  // if the first char is 'x', return string without it
  // if the last char is 'x', return string without it
  // else return str
  if (typeof str !== "string") {
    return "error";
  }

  if (str[0] === "x" && str[str.length - 1] === "x") {
    const minusFirstAndLast = str.slice(1, str.length - 1);
    return minusFirstAndLast;
  } else if (str[0] === "x") {
    const minusFirst = str.slice(1);
    return minusFirst;
  } else if (str[str.length - 1] === "x") {
    const minusLast = str.slice(0, str.length - 1);
    return minusLast;
  } else {
    return str;
  }
}
