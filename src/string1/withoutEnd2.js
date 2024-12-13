/**
 *
 * @param {string} str
 * @returns a string withe the first and last char removed.
 */
export default function withoutEnd2(str) {
  // Guard against non string args
  // if str length is less than or equal to 2 return empty str
  // else slice a new string from index 1 to length - 1
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length <= 2) {
    return "";
  } else {
    return str.slice(1, str.length - 1);
  }
}
