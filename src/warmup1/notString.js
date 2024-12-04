/*
Given a string, return a new string where "not " has been added to the front. 
However, if the string already begins with "not", return the string unchanged.
*/

/**
 *
 * @param {string} str
 * @returns the string unchanged if it doesn't start with not
 * else returns string with "not " appended
 */
export default function notString(str) {
  if (str.startsWith("not") === false) {
    return `not ${str}`;
  } else {
    return str;
  }
}
