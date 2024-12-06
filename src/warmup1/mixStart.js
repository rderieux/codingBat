/**
 *
 * @param {string} str
 * @returns true if the start of the string matches wildcard, ix
 */
export default function mixStart(str) {
  // Extract the text from the string
  const text = str.slice(0, 3);
  // use regexp to search for wildcard, ix
  const pattern = /.ix/;

  //if pattern matches text return true
  if (pattern.test(text) === true) {
    return true;
  } else {
    return false;
  }
}
