/**
 *
 * @param {string} str
 * @returns a number of the largest 'block'.
 * A 'block' is a run of adjacent chars that are the same.
 */
export default function maxBlock(str) {
  // Guard against non string arg
  // initialize largestBlock, set value to 1
  // loop through 'str', set a count variable to 1
  // check if index + 1 is equal to index
  // if it is add one to count, else set largest block value to count
  // unless count is less than largestBlock
  // return largestBlock
  if (typeof str !== "string") {
    return "error";
  }

  if (str.length === 0) {
    return 0;
  }

  let largestBlock = 1;
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (largestBlock < count) {
        largestBlock = count;
      }
      count = 1;
    }
  }
  if (largestBlock < count) {
    largestBlock = count;
  }

  return largestBlock;
}
