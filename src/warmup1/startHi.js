//Given a string, return true if the string starts with 'hi'
//and false otherwise.

/**
 *
 * @param {string} str
 * @returns true if a string starts with "hi", otherwise false.
 */
export default function startHi(str) {
  if (str.slice(0, 2) === "hi") {
    return true;
  } else {
    return false;
  }
}
