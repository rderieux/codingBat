/**
 *
 * @param {array} numberArray
 * @returns a count of how many times 9 appears in the given array.
 */
export default function arrayCount9(numberArray) {
  // Declare a variable count
  // Loop through the array
  // if current index equals 9 add to count
  // return count
  let count = 0;
  if (!Array.isArray(numberArray)) {
    return "error";
  }
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === 9) {
      count += 1;
    }
  }
  return count;
}
