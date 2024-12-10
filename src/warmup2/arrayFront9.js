/**
 *
 * @param {array} numberArray
 * @returns true if one of the first 4 elements of an array is 9,
 * else returns false.
 */
export default function arrayFront9(numberArray) {
  // Declare a count variable
  // loop through the first 4 elements of the array
  // if current index of array equals 9 add 1 to count
  // return true if count is greater than 0
  let count = 0;
  let end = numberArray.length < 5 ? numberArray.length : 4;
  if (!Array.isArray(numberArray)) {
    return "error";
  }
  for (let i = 0; i < end; i++) {
    if (numberArray[i] === 9) {
      count += 1;
    }
  }

  if (count > 0) {
    return true;
  } else {
    return false;
  }
}
