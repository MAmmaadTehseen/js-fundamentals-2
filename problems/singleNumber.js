// this problem wants us to find the number that only appears once in an array of numbers


var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let target = nums[i];
    if (
      nums.includes(target) &&
      nums.lastIndexOf(target) == nums.indexOf(target)
    ) {
      return nums[i];
    }
  }
};

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
