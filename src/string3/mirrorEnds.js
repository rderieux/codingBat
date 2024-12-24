/**
 *
 * @param {string} str
 * @returns a string of where the front of the given string mirrors the tail.
 * It can overlap, for example "abba" returns "abba", but "abxyzba" returns "ba".
 */
export default function mirrorEnds(str) {
  // Guard against non string arg
  // initialize resultString, set value to empty string
  // initialize reverseStr, set value to a reversed version of 'str'
  // loop through 'str', if the current index is the same in both strings
  // concatenate resultString the value of current index
  // return resultString

  if (typeof str !== "string") {
    return "error";
  }

  let resultString = "";
  const reverseString = str.split("").reverse().join("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] === reverseString[i]) {
      resultString += str[i];
    } else {
      break;
    }
  }
  return resultString;
}
