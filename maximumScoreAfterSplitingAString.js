// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0;
  for (let i = 1; i < s.length; i++) {
    let ones = 0,
      zeros = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] == 1) {
        ones++;
      }
    }
    for (let k = i - 1; k >= 0; k--) {
      if (s[k] == 0) {
        zeros++;
      }
    }
    if (zeros + ones > max) {
      max = zeros + ones;
    }
  }
  return max;
};

// Test
console.log(maxScore("011101")); // 5
console.log(maxScore("00111")); // 5
console.log(maxScore("1111")); // 3
console.log(maxScore("00")); // 1
