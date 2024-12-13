/**
 *
 * @param {string} str
 * @returns true if index 0 through 2, or 1 through 3 equal 'bad',
 * else returns false.
 */
export default function hasBad(str) {
  // Guard against non string arg
  // if str index 0 through 2 OR index 1 through 3
  // equals 'bad' return true
  // else return false
  if (typeof str !== "string") {
    return "error";
  }
  if (str.slice(0, 3) === "bad" || str.slice(1, 4) === "bad") {
    return true;
  } else {
    return false;
  }
}
