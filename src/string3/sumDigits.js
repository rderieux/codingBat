/**
 *
 * @param {string} str
 * @returns the sum of all the numbers 0-9 that appear in the string.
 */
export default function sumDigits(str) {
  // Guard against non string arg
  // initialize a variable sum, set to 0
  // loop through the 'str', if index is a number
  // add it to the sum, return sum
  if (typeof str !== "string") {
    return "error";
  }

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      const num = Number(str[i]);
      sum += num;
    }
  }
  return sum;
}
