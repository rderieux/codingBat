/**
 *
 * @param {string} str
 * @returns true if 'bob' appears in the string, else false.  The 'o' can be any char.
 */
export default function bobThere(str) {
  // Guard against non string arg
  // loop through string
  // if current index and index plus 2 both equal b, return true
  // else return false
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length < 3) {
    return false;
  }

  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === "b" && str[i + 2] === "b") {
      return true;
    }
  }
  return false;
}
