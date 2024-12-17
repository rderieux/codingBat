export default function xyzThere(str) {
  // Guard against non string arg
  // declare a count variable
  // loop through the str
  // if index is a period, skip 3 indexes
  // if index to index plus 2 equals xyz
  // add to count
  // if count is greater than 0 return true
  // else return false
  if (typeof str !== "string") {
    return "error";
  }

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      i += 2;
    }
    if (str[i] === "x" && str[i + 1] === "y" && str[i + 2] === "z") {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else {
    return false;
  }
}
