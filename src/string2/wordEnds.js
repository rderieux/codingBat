/**
 *
 * @param {string} str
 * @param {string} word
 * @returns a string made of each char before and after each appearance of the
 * 'word', in the 'str'.
 */
export default function wordEnds(str, word) {
  // Guard against incorrect types
  // initialize a resultString variable, set value to empty string
  // initialize a wordLength variable, set value to word length
  // loop through 'str', limit is less than or equal to str length - wordLength
  // if index through wordLength is equal to word,
  //   if index > 0, concatenate the char before the word
  //   if index plus wordLength < str.length, concatenate char after the word
  // return resultString
  if (typeof str !== "string" || typeof word !== "string") {
    return "error";
  }

  let resultString = "";
  const wordLength = word.length;

  for (let i = 0; i <= str.length - wordLength; i++) {
    if (str.slice(i, i + wordLength) === word) {
      if (i > 0) {
        resultString += str[i - 1];
      }
      if (i + wordLength < str.length) {
        resultString += str[i + wordLength];
      }
    }
  }
  return resultString;
}
