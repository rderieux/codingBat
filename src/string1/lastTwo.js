/**
 *
 * @param {string} str
 * @returns a string with the last two characters switched.
 * Returns the argument string if less than 2 characters.
 */
export default function lastTwo(str) {
  // Guard against non string arg
  // if string is less than 2 chars, return string
  // else assign last char to variable,
  // assign second to last char
  // return str minus last two plus last char plus second last char
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length < 2) {
    return str;
  } else {
    const lastChar = str.slice(-1);
    const secondLastChar = str.slice(str.length - 2, str.length - 1);

    return str.slice(0, str.length - 2) + lastChar + secondLastChar;
  }
}
