/**
 *
 * @param {string} str
 * @returns true if the string 'is' appears the same number of times as 'not'.
 * Case sensitive.
 */
export default function equalIsNot(str) {
  // Guard against non str arg
  // initialize a count variable for 'is', set value to 0
  // initialize a count variable for 'not', set value to 0
  // if string length is less than 5, return false
  // loop through the string, if index to index + 1
  // equals 'is' add to is count
  // if index to index + 2 equals 'not', add to not count
  // do the same for 'Is' and 'Not'
  // if lower case strings count is equal
  // AND upper case strings count is equal
  // return true, else false
  if (typeof str !== "string") {
    return "error";
  }

  let isLowercaseCount = 0;
  let notLowercaseCount = 0;
  let isUppercaseCount = 0;
  let notUppercaseCount = 0;
  debugger;
  for (let i = 0; i < str.length - 1; i++) {
    const strSliceForIs = str.slice(i, i + 2);
    const strSliceForNot = str.slice(i, i + 3);
    if (strSliceForIs === "is") {
      isLowercaseCount++;
    }
    if (strSliceForIs === "Is") {
      isUppercaseCount++;
    }
    if (strSliceForNot === "not") {
      notLowercaseCount++;
    }
    if (strSliceForNot === "Not") {
      notUppercaseCount++;
    }
  }

  if (
    isLowercaseCount === notLowercaseCount &&
    isUppercaseCount === notUppercaseCount
  ) {
    return true;
  } else {
    return false;
  }
}
