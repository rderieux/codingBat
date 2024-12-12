export default function has271(nums) {
  // Guard against bad inputs
  // If length of array is less than 3, return false
  // loop through array if index + 1 is five greater than index
  // AND index + 2 is 1 less than index
  // OR 2 less than index, OR 3 less than index
  // OR equal to index, OR one greater than index
  // return true, else false
  if (!Array.isArray(nums)) {
    return "error";
  }
  if (nums.length < 3) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i + 1] === nums[i] + 5 && nums[i + 2] === nums[i] - 1) ||
      nums[i + 2] === nums[i] - 2 ||
      nums[i + 2] === nums[i] - 3 ||
      nums[i + 2] === nums[i] ||
      nums[i + 2] === nums[i] + 1
    ) {
      return true;
    }
  }
  return false;
}
