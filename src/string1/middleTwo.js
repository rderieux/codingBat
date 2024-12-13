/**
 *
 * @param {string} str
 * @returns the middle of a str if odd, the middle two chars if even.
 */
export default function middleTwo(str) {
  // Guard against non strings
  // if str is divisible by two
  // slice str.length divided by 2 minus 1 for first char
  // str.length divided by 2 + 1 for second char
  // else return string
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length === 0) {
    return "";
  } else if (str.length === 1) {
    return str;
  } else if (str.length % 2 === 0) {
    return str.substring(str.length / 2 - 1, str.length / 2 + 1);
  } else {
    return str.substring(str.length / 2, str.length / 2 + 1);
  }
}
