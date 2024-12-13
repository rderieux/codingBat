/**
 *
 * @param {string} str
 * @returns the middle three chars of a string,
 * if the provided string is greater than or equal to 3.
 */
export default function middleThree(str) {
  // Guard against non string arg
  // if the string is an odd number and 3 or more
  // find the middle of the string
  // get the numbers 1 before middle to one after
  // assign to variable, return variable
  if (typeof str !== "string") {
    return "error";
  }
  if (str.length % 2 !== 0 && str.length >= 3) {
    const middleThreeStr = str.slice(str.length / 2 - 1, str.length / 2 + 2);
    return middleThreeStr;
  } else {
    return str;
  }
}
