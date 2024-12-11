export default function array667(nums) {
  // Declare a count varialbe
  // loop through the given array
  // if current index is 6 and index + 1 is 6
  // OR current index is 6 and index + 1 is 7
  // add 1 to count, return count
  if (!Array.isArray(nums)) {
    return "error";
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (
      (nums[i] === 6 && nums[i + 1] === 6) ||
      (nums[i] === 6 && nums[i + 1] === 7)
    ) {
      count += 1;
    }
  }
  return count;
}
