//Given two temperatures, return true if one is less than 0
//and the other is greater than 100.

/**
 *
 * @param {number} temp1
 * @param {number} temp2
 * @returns true if one temp is less than 0 and one temp is greater than 100.
 */
export default function icyHot(temp1, temp2) {
  if ((temp1 < 0 || temp2 < 0) && (temp1 > 100 || temp2 > 100)) {
    return true;
  } else {
    return false;
  }
}
