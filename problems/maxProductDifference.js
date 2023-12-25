//find the maximum difference between any two pair of elements in the array

var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);

  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

console.log(maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4]));

console.log([1, 6, 7, 5, 2, 4, 10, 6, 4].sort((a, b) => a - b));
