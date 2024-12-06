/**
 *
 * @param {string} str
 * @returns string without "del", if it is at index[1],
 * otherwise returns unchanged string.
 */
export default function delDel(str) {
  // If str index1-3 is "del", save index 0, save index4-length
  // concat and return, else return string unchanged
  if (str.slice(1, 4) === "del") {
    const firstChar = str.slice(0, 1);
    const afterDel = str.slice(4, str.length);
    return firstChar + afterDel;
  } else {
    return str;
  }
}
