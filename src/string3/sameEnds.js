/**
 *
 * @param {string} str
 * @returns the longest substring that appears at both the beginning
 * and end of the string without overlapping.  For example "abXab"
 * will return "ab".
 */
export default function sameEnds(str) {
  // Guard against non string arg
  // initialize a variable resultString, set value to empty string
  // loop through 'str', using the middle of the string as the limit
  // initialize a frontString, set value from the front of 'str' to index,
  // and a backString, set value from tail minus index number
  // if frontString is equal to backString,
  // set resultString to frontString value
  // return frontString
  if (typeof str !== "string") {
    return "error";
  }

  let resultString = "";
  const strLength = str.length;

  for (let i = 0; i <= Math.floor(strLength / 2); i++) {
    const frontString = str.slice(0, i);
    const backString = str.slice(strLength - i);

    if (frontString === backString) {
      resultString = frontString;
    }
  }

  return resultString;
}
