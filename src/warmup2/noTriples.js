export default function noTriples(nums) {
  // If the given array is less than 3, return true
  // Loop through the array, end loop length - 2
  // if the index + 1, and index + 2 equals current index,
  // return false, else return true
  if (!Array.isArray(nums)) {
    return "error";
  }
  if (nums.length < 3) {
    return true;
  } else {
    for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i + 1] === nums[i] && nums[i + 2] === nums[i]) {
        return false;
      }
    }
  }
  return true;
}
