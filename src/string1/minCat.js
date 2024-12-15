/**
 *
 * @param {string} a
 * @param {string} b
 * @returns a concatenated string of a and b, unless a string is shorter,
 * it is cut to the same number of chars as longer string,
 * then concatenated.
 */
export default function minCat(a, b) {
  // Guard against non string args
  // if a or b are empty, return empty string.
  // assign longer string to a variable
  // assign shorter string to a variable
  // assign shorter string length to a variable
  // assign longer string sliced to the length of the shorter string variable
  // if a length is greater or equal b length,
  // return slicedStr + shorterString
  // else return shorterString + sliced string
  if (typeof a !== "string" || typeof b !== "string") {
    return "error";
  }
  if (a.length === 0 || b.length === 0) {
    return "";
  }
  const longerString = a.length >= b.length ? a : b;
  const shorterString = a.length >= b.length ? b : a;
  const shorterStringLength = a.length >= b.length ? b.length : a.length;
  const slicedStr = longerString.slice(-shorterStringLength);

  if (a.length >= b.length) {
    return slicedStr + shorterString;
  } else {
    return shorterString + slicedStr;
  }
}
