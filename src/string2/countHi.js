/**
 *
 * @param {string} str
 * @returns a count of the number of times 'hi' appears in the given string.
 */
export default function countHi(str) {
  // Guard against non string arg
  // declare a count variable
  // loop through string,
  // if current index is 'h' and next index is 'i'
  // add 1 to count variable
  // return count
  if (typeof str !== "string") {
    return "error";
  }
  let hiCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "h" && str[i + 1].toLowerCase() === "i") {
      hiCount += 1;
    }
  }
  return hiCount;
}
