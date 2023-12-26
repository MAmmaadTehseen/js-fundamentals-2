// You have n dice, and each die has k faces numbered from 1 to k.

// Given three integers n, k, and target, return the number of possible ways (out of the kn total ways) to roll the dice, so the sum of the face-up numbers equals target. Since the answer may be too large, return it modulo 109 + 7.

function numRollsToTarget(d, f, target) {
  let dp = new Array(d + 1).fill(0).map(() => new Array(target + 1).fill(0));
  dp[0][0] = 1;
  let mod = 1e9 + 7;
  for (let i = 1; i <= d; i++) {
    for (let j = 1; j <= target; j++) {
      for (let k = 1; k <= f; k++) {
        if (j >= k) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % mod;
        }
      }
    }
  }
  return dp[d][target];
}

// Example 1:
numRollsToTarget(1, 6, 3);
// Output: 1
// Explanation: You throw one die with 6 faces. There is only one way to get a sum of 3.

// Example 2:

numRollsToTarget(2, 6, 7);

// Output: 6

// Explanation: You throw two dice, each with 6 faces. There are 6 ways to get a sum of 7:
