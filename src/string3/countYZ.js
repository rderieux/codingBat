/**
 *
 * @param {string} str
 * @returns a number for every word that ends with a 'y' or 'z'.
 * End of word is when a non alphabetic letter follows an alphabetic letter.
 */
export default function countYZ(str) {
  // Guard against non string arg
  // initialize a xYCount variable, set value to 0
  // loop through the 'str' arg,
  // if index is 'y' OR 'z'
  // AND if it is at the end of the 'str'
  // OR index plus 1 is not an alphabetic charater
  // add one to xYCount, return xYCount
  if (typeof str !== "string") {
    return "error";
  }

  str = str.toLowerCase();
  let xYCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === "y" || str[i] === "z") &&
      (i === str.length - 1 || !/[a-z]/i.test(str[i + 1]))
    ) {
      xYCount++;
    }
  }
  return xYCount;
}
