/**
 *
 * @param {string} a
 * @param {string} b
 * @returns A string.  Given two strings it returns the shorter string
 * concatenated to the longer string, concatenated to the shorter string
 */
export default function comboString(a, b) {
  // Guard against non string args
  // create a short and long varaible
  // assign the shorter string to short
  // longer string to long
  // return concatenated short, long, short
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }
  const short = a.length < b.length ? a : b;
  const long = a.length > b.length ? a : b;

  return short + long + short;
}
