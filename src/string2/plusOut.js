/**
 *
 * @param {string} str
 * @param {string} word
 * @returns a version of the original string where all the chars
 * have been replaced with pluses '+', except for appearances of the word
 * string which are preserved unchanged.
 */
export default function plusOut(str, word) {
  // Guard against incorrect types
  // initialize resultString with an empty string
  // loop through the str
  // if current index to word length matches word,
  // concatenate it to the resultString
  // else concatenate a plus
  // return resultString
  if (typeof str !== "string" || typeof word !== "string") {
    return "error";
  }

  let resultString = "";

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + word.length) === word) {
      resultString += word;
      i += word.length - 1;
    } else {
      resultString += "+";
    }
  }
  return resultString;
}
