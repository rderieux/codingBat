/**
 *
 * @param {string} a
 * @param {string} b
 * @returns a string of a + b + b + a.
 */
export default function makeAbba(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }
  return a + b + b + a;
}
