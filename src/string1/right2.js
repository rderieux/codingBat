/**
 *
 * @param {string} str
 * @returns a string with the last two chars moved to the front.
 */
export default function right2(str) {
  // Guard against non strings
  // create two variable
  // store last 2 chars in one
  // all but last 2 in the other
  // return last 2 concatenated with other string
  if (typeof str !== "string") {
    return "error";
  }
  const lastTwoChar = str.substring(str.length - 2);
  const allButLastTwo = str.substring(0, str.length - 2);

  return lastTwoChar + allButLastTwo;
}
