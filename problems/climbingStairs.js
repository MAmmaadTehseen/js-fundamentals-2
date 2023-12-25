var climbStairs = function (n) {
  let arr = [];
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n];
};

console.log(climbStairs(2)); // 2

console.log(climbStairs(3)); // 3

console.log(climbStairs(4)); // 5

console.log(climbStairs(5)); // 8

console.log(climbStairs(19)); // 4181
