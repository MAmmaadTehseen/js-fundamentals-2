var numDecodings = function (s) {
  if (!s || s[0] === "0") {
    return 0;
  }

  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    const oneDigit = parseInt(s[i - 1]);
    const twoDigits = parseInt(s.substring(i - 2, i));

    if (1 <= oneDigit && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    if (10 <= twoDigits && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};

// Example usage:
const s = "11106";
const result = numDecodings(s);
console.log(result);
