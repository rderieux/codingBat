/**
 *
 * @param {string} a
 * @param {string} b
 * @returns a concatenated string of a and b.  Unless the last letter of
 * string a is equal to the first letter of string b.  Then slices off
 * the last letter of string a before concatenation.
 */
export default function conCat(a, b) {
  // Guard against non string args
  // if the last char of string a is the same as string b
  // concatenate them minus last char of a
  // else concatenate string a, and b
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }
  if (a[a.length - 1] === b[0]) {
    a = a.slice(0, a.length - 1);
    return a + b;
  } else {
    return a + b;
  }
}
