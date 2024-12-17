/**
 *
 * @param {string} str
 * @returns true if, when an 'x' appears in a string, it is followed by a 'y', else false.
 */
export default function xyBalance(str) {
  // Guard against non string arg
  // declare a variable to store the last index of 'x'
  // declare a variable to store the last index of 'y'
  // loop through str, if current index is 'x', update variable
  // loop through str, if current index is 'y', update variable
  // if 'y' variable is larger than 'x' variable
  // return true, else return false
  if (typeof str !== "string") {
    return "error";
  }

  let lastXIndex = 0;
  let lastYIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      lastXIndex = i;
    }
    if (str[i] === "y") {
      lastYIndex = i;
    }
  }
  if (str === "x") {
    return false;
  } else if (lastXIndex === 0 && lastYIndex === 0) {
    return true;
  } else if (lastYIndex > lastXIndex) {
    return true;
  } else {
    return false;
  }
}
