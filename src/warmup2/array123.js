/**
 *
 * @param {array} nums
 * @returns true if the sequence 1,2,3 appears in the given array,
 * else false.
 */
export default function array123(nums) {
  // Loop through nums array
  // create a variable that slices the current index and next two from nums
  // create an array [1,2,3]
  // if slice array and [1,2,3] array are equal
  // return true, else false
  if (!Array.isArray(nums)) {
    return "error";
  }
  for (let i = 0; i < nums.length - 2; i++) {
    const numsSlice = nums.slice(i, i + 3);
    const oneTwoThree = [1, 2, 3];
    if (JSON.stringify(numsSlice) === JSON.stringify(oneTwoThree)) {
      return true;
    }
  }
  return false;
}
