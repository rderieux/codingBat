/**
 *
 * @param {string} str
 * @returns a count of the number of times 'code' appears in str.
 * The 'd' can be any character.  'cope' and 'cole' count.
 */
export default function countCode(str) {
  // Guard against non string arg
  // declare a count variable
  // declare a regex variable for 'code' to wild card 'd'
  // loop through str, if current index to index + 3
  // is equal to regex variable, add to count
  // return count
  if (typeof str !== "string") {
    return "error";
  }

  let count = 0;
  const regex = /co.e/g;

  for (let i = 0; i < str.length - 3; i++) {
    if (regex.test(str.slice(i, i + 4))) {
      count += 1;
    }
  }
  return count;
}
