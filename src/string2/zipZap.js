/**
 *
 * @param {string} str
 * @returns a string where patters like 'zip' and 'zap' have their middle
 * char removed.  The middle char can be any char.
 */
export default function zipZap(str) {
  // Guard against non string arg
  // initialize resultString and set value to empty string
  // loop through str, if index is z, and index + 2 is p
  // concatenate 'zp' to resultString, add 2 to index
  // else concat current index to resultString
  // return resultString
  if (typeof str !== "string") {
    return "error";
  }

  let resultString = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "z" && str[i + 2] === "p") {
      resultString += "zp";
      i += 2;
    } else {
      resultString += str[i];
    }
  }
  return resultString;
}
