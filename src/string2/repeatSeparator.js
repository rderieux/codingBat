/**
 *
 * @param {string} word
 * @param {string} sep
 * @param {number} count
 * @returns a string made up of 'word' and 'sep' made of 'count' occurances of 'word'
 * and 'count' - 1 occurances of 'sep'.
 */
export default function repeatSeparator(word, sep, count) {
  // Guard against incorrect types
  // instantiate a result string varialbe and assign it an empty string value
  // instantiate a variable and assign it the sep length value
  // instantiate a limit variable and assign it the count value
  // create a loop, using the limit variable as the stop
  // each iteration concatenate word and sep to the result string
  // after the loop slice the last sep off the result string
  // return the result string
  if (
    typeof word !== "string" ||
    typeof sep !== "string" ||
    typeof count !== "number"
  ) {
    return "error";
  }

  let resultString = "";
  const sepLength = sep.length;
  const limit = count;

  for (let i = 0; i < limit; i++) {
    resultString += word;
    resultString += sep;
  }

  resultString = resultString.slice(0, resultString.length - sepLength);
  return resultString;
}
