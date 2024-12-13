/**
 *
 * @param {string} a
 * @param {string} b
 * @returns the first char of string a, and last char of string b.
 * If string is length 0 use '@' in its place.
 */
export default function lastChars(a, b) {
  // Guard against non strings
  // if str a length is 0, str a equals @
  // if str b length is 0, str b equals @
  // else return the first char of string a, and last of str b
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }
  if (a.length === 0) {
    a = "@";
  }
  if (b.length === 0) {
    b = "@";
  }
  a = a.slice(0, 1);
  b = b.slice(-1);

  return a + b;
}
