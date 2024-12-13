/**
 *
 * @param {string} a
 * @param {string} b
 * @returns a concatenated str of a and b, minus index[0] of both.
 */
export default function nonStart(a, b) {
  // Guard against non string args
  // assign a new string to string a minus first char
  // assign b to new string minus first char
  // return new strings concatenated
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }
  const aMinusOne = a.slice(1, a.length);
  const bMinusOne = b.slice(1, b.length);

  return aMinusOne + bMinusOne;
}
