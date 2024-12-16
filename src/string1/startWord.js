/**
 *
 * @param {string} str
 * @param {string} word
 * @returns a string of the front of `str` if it matches `word`.
 * The first char is a 'wild card'.
 */
export default function startWord(str, word) {
  // Guard against non string args
  // if the str is empty, return empty str
  // create a variable of index[1] to end of word string
  // create a varialbe of word length
  // if word matches the second char of str to word length
  // return str to word length
  // else return empty string
  if (typeof str !== "string" || typeof word !== "string") {
    return "error";
  }
  debugger;
  if (str.length === 0) {
    return "";
  }

  const word2ndToEnd = word.slice(1);
  const wordLength = word.length;
  const str2ndToEnd = str.slice(1, wordLength);

  if (word2ndToEnd === str2ndToEnd) {
    return str.slice(0, wordLength);
  } else {
    return "";
  }
}
