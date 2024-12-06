/**
 *
 * @param {string} str
 * @returns true if str contains 1-3 e chars, false if it doesn't.
 */
export default function stringE(str) {
  // Declare a count variable for e
  let eCount = 0;

  // Loop through the str, if the current index is "e" add 1 to variable
  // after the loop, if variable is 1-3 return true, else return false
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e" || str[i] === "E") {
      eCount += 1;
    }
  }
  if (eCount > 0 && eCount <= 3) {
    return true;
  } else {
    return false;
  }
}
