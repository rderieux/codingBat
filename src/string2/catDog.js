/**
 *
 * @param {string} str
 * @returns true if the given string has 'cat' and 'dog' the same number
 * of times, else returns false.
 */
export default function catDog(str) {
  // Guard against non string arg
  // declare a count for cats and one for dogs
  // loop through str, if current index to index plus 2 is 'cat'
  // add to cat count, if current index to index plux 2 is 'dog'
  // add to dog count
  // if cat count and dog count is equal,
  // return true, else return false
  if (typeof str !== "string") {
    return "error";
  }
  let catCount = 0;
  let dogCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + 3) === "cat") {
      catCount += 1;
    }
    if (str.slice(i, i + 3) === "dog") {
      dogCount += 1;
    }
  }
  return catCount === dogCount ? true : false;
}
