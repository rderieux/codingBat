/**
 *
 * @param {string} str
 * @returns a string with every char doubled.
 */
export default function doubleChar(str) {
  // Guard against non string arg
  // declare a variable string to concatenate to
  // loop through str, concat each char to new string twice
  // return new string
  if (typeof str !== "string") {
    return "error";
  }

  let doublesStr = "";

  for (let i = 0; i < str.length; i++) {
    doublesStr += str[i];
    doublesStr += str[i];
  }

  return doublesStr;
}
