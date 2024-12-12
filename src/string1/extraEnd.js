/**
 *
 * @param {string} str
 * @returns a string of the last two chars of provided string
 * concatenated three times.
 */
export default function extraEnd(str) {
  if (typeof str !== "string") {
    return "error";
  }
  const lastTwoChar = str.slice(-2);
  return lastTwoChar + lastTwoChar + lastTwoChar;
}
