/**
 *
 * @param {string} str
 * @returns returns true if 'xyz' appears in the middle of a string.
 * Middle is if the number of chars to the left and right of 'xyz'
 * differ by one at most.
 */
export default function xyzMiddle(str) {
  // Guard against incorrect types
  // if str.length is less than 3 return false
  // loop through 'str', starting from the middle -2 indexes,
  // if index is x, index + 1 is y, and index plus 2 is z,
  // set frontEnd variable to index
  // set endFront variable to index plus 3
  // set frontString variable to str[0] to frontEnd
  // set endString variable to str[endFront]
  // if frontString length is equal to endString, return true
  // if frontString length is 1 higher or lower to endString, return true
  // else return false
  if (typeof str !== "string") {
    return "error";
  }

  if (str.length < 3) {
    return false;
  }
  if (str === "xyz") {
    return true;
  }

  let frontEnd = 0;
  let endFront = 0;
  let frontString = "";
  let endString = "";
  const middleString = Math.floor(str.length / 2);

  for (let i = middleString - 2; i <= middleString + 1; i++) {
    if (str[i] === "x" && str[i + 1] === "y" && str[i + 2] === "z") {
      frontEnd = i;
      endFront = i + 3;
      frontString = str.slice(0, frontEnd);
      endString = str.slice(endFront);
      const difference = Math.abs(frontString.length - endString.length);
      if (difference <= 1) {
        return true;
      }
    }
  }

  return false;
}
