// You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

// The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

var minOperations = function (s) {
  let change0to1StartWith0 = 0;
  let change1to0StartWith1 = 0;

  // Iterate through the string for the case starting with '0'
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] !== "0") {
        change0to1StartWith0++;
      }
    } else {
      if (s[i] !== "1") {
        change0to1StartWith0++;
      }
    }
  }

  // Iterate through the string for the case starting with '1'
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] !== "1") {
        change1to0StartWith1++;
      }
    } else {
      if (s[i] !== "0") {
        change1to0StartWith1++;
      }
    }
  }

  // Return the minimum number of operations needed
  return Math.min(change0to1StartWith0, change1to0StartWith1);
};
