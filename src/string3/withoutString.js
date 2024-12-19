/**
 *
 * @param {string} base to be checked for appearances of 'remove'
 * @param {string} remove string to check for appearance in 'base'
 * @returns a version of the 'base' string with all appearances of 'remove'
 * have been removed from 'base'.
 */
export default function withoutString(base, remove) {
  // Guard against incorrect types
  // initialize resultString, set value to empty string
  // initialize removeLength, set value to remove length
  // loop through 'base', limit is base length - removeLength
  // if index to removeLength is equal to 'remove'
  // add removeLength - 1 to index
  // else concatenate current index to resultString
  // initialize removeExtraSpaces, set value to empty string
  // loop through resultString, if current index equals " "
  // and next index equals " ", do nothing
  // else concatenate current index to removeExtraSpaces
  // assign removeExtraSpaces to resultString
  // return resultString
  if (typeof base !== "string" || typeof remove !== "string") {
    return "error";
  }

  let resultString = "";
  const removeLength = remove.length;

  for (let i = 0; i < base.length; i++) {
    const baseSlice = base.slice(i, i + removeLength);
    if (baseSlice.toLowerCase() === remove.toLowerCase()) {
      i += removeLength - 1;
    } else {
      resultString += base[i];
    }
  }
  let removeExtraSpaces = "";
  for (let i = 0; i < resultString.length; i++) {
    if (resultString[i] === " " && resultString[i + 1] === " ") {
      // do nothing
    } else {
      removeExtraSpaces += resultString[i];
    }
  }
  resultString = removeExtraSpaces;

  return resultString.trim();
}
