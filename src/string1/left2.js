/**
 *
 * @param {string} str
 * @returns A string with first two chars moved to the end of the string.
 */
export default function left2(str) {
  // Guard against non strings
  // slice first two chars off str
  // slice all but the first two chars off str
  // concat first two to end of all but first two
  // return concat string
  if (typeof str !== "string") {
    return "error";
  }
  const firstTwoChar = str.slice(0, 2);
  const allButFirstTwo = str.slice(2, str.length);

  return allButFirstTwo + firstTwoChar;
}
