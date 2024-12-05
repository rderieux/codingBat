/*
Given a string, take the first 2 chars and return the string 
with the 2 chars added at both the front and back, so 'kitten' 
yields 'kikittenki' chars are there.
*/

/**
 *
 * @param {string} str
 * @returns a string with the first two chars of the argument string
 * appended and prepended to said string
 */
export default function front22(str) {
  const firstTwoChars = str.slice(0, 2);
  return firstTwoChars + str + firstTwoChars;
}
