// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

function isPalindrome(x) {
  let str = x.toString();
  let reverse = str.split("").reverse().join("");
  if (str == reverse) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false
console.log(isPalindrome(0)); // true
console.log(isPalindrome(11)); // true
