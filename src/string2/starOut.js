/**
 *
 * @param {string} str
 * @returns a string with all the chars before and after a star (*) are removed.
 */
export default function starOut(str) {
  // Guard against non str arg
  // initialize resultString and set value to empty string
  // loop through 'str', if char before index, current index,
  // or char after index are '*', do nothing
  // else concatenate index to resultString
  // return resultString
  if (typeof str !== "string") {
    return "error";
  }
  let resultString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === "*" || str[i] === "*" || str[i + 1] === "*") {
    } else {
      resultString += str[i];
    }
  }
  return resultString;
}
/* the hard way yeesh.  I waaaay over complicated this.
  let resultString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "*" && str[i + 1] === "*" && str[i + 2] !== "*") {
    } else if (str[i] !== "*" && str[i + 1] === "*") {
    } else if (str[i] === "*" && str[i + 1] === "*") {
    } else if (str[i] === "*" && str[i + 1] !== "*") {
    } else if (str[i - 1] === "*" && str[i] !== "*") {
    } else {
      resultString += str[i];
    }
  }
  return resultString;
}
*/
