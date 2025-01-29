/**
 *
 * @param str {string}
 * @returns The function should return the sum of the
 * numbers appearing in the string, ignoring all other
 * characters. A number is a series of 1 or more digit
 * chars in a row.
 */
export default function sumNumbers(str) {
  if (typeof str !== "string") {
    return "error";
  }
  //return str.match(/\d+/g)?.reduce((acc, cur) => acc + parseInt(cur), 0) || 0;
  // loop through a string
  // look at current character, if it is a number
  // keep looking at the next character until it is not a number
  // add the number to a sum variable
  // return the sum variable

  let sum = 0;
  let num = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      num += str[i];
    } else {
      if (num.length > 0) {
        sum += parseInt(num);
        num = "";
      }
    }
  }
  if (num.length > 0) {
    sum += parseInt(num);
  }
  return sum;
}
