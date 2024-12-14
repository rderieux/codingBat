/**
 *
 * @param {str} str
 * @returns the string 'red' if argument string starts with 'red',
 * returns the string 'blue' if argument string starts with 'blue',
 * else returns an empty string.
 */
export default function seeColor(str) {
  // Guard against non string arg
  // if the arg string starts with 'red', return 'red'
  // if the arg string starts with 'blue', return 'blue'
  // else return empty string

  if (typeof str !== "string") {
    return "error";
  }

  const redCheck = str.slice(0, 3);
  const blueCheck = str.slice(0, 4);

  if (redCheck === "red") {
    return redCheck;
  } else if (blueCheck === "blue") {
    return blueCheck;
  } else {
    return "";
  }
}
