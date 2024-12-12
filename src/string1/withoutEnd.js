/**
 *
 * @param {string} str
 * @returns a str with the first and last character removed.
 */
export default function withoutEnd(str) {
  // Guard case for non str args
  // if the str is 2 or less characters, return empty str
  // else slice the string from index 1 to str length - 1
  // return str slice
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length <= 2) {
    return "";
  } else {
    return str.slice(1, str.length - 1);
  }
}
