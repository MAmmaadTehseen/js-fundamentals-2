`use strict`;
//-----------------------------------------------------------------------------------//
//var is function level scope
//let is block level scope

var a = 10;
let b = 20;

console.log(a);
console.log(b);

//type conversion

console.log(typeof a);
console.log(a);
b = String(a);
console.log(typeof b);
console.log(b);
//alert
//alert(true);
//-----------------------------------------------------------------------------------//
//Nullish coalescing operator '??'
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// let user;
// console.log(user ?? "Anonymous"); // Anonymous
// //-----------------------------------------------------------------------------------//
// //  break <labelName>
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     // let input = prompt(`Value at coords (${i},${j})`, "");

//     // what if we want to exit from here to Done (below)?
//     if (!input) break outer;
//   }
// }

console.log("Done!");
//-----------------------------------------------------------------------------------//
//objects
let user = {
  name: "Muhammad Ammad Tehseen",
  id: 0,
  age: 21,
  "favourite personality": "Muhammad(SAW)",
};
console.log(user.age);
console.log("favourite personality" in user);

//-----------------------------------------------------------------------------------//
//for in loop
for (key in user) {
  console.log(key);
  console.log(user[key]);
}
//copy a object
let clone = Object.assign({}, user);
clone.name = "Ammad";
console.log(clone);
console.log(user);

//structured clone
Object.assign(user, { lenght: { cm: 10, inch: 20 } });
let clone2 = structuredClone(user);
clone2.lenght.cm = 20;
console.log(clone2);

//-----------------------------------------------------------------------------------//
//constructor function
function User(name, age) {
  this.name = name;
  this.age = age;
  this.isAdmin = false;
}
let newUser = new User("bopinder jogi", 21);
console.log(newUser);

//-----------------------------------------------------------------------------------//
// for of
let arr = ["Ammad", "Ali", "Tehseen"];
for (let value of arr) {
  console.log(value);
}
//-----------------------------------------------------------------------------------//
var convertToTitle = function (columnNumber) {
  let num = columnNumber;
  let str = String.fromCodePoint((num % 26) + 64);
  while (num > 26) {
    num /= 26;
    num = Number.parseInt(num);
    // return num;

    str = str + String.fromCodePoint((num != 26 ? num % 26 : 26) + 64);
  }
  return str.split("").reverse().join("");
};

console.log(convertToTitle(701));
//-----------------------------------------------------------------------------------//

//-----------------------------------------------------------------------------------//

var threeSum = function (nums) {
  let ar = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          ar = ar.concat([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return ar;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

var removeDuplicates = function (nums) {
  let se = new Set(nums);
  nums = Array.from(se);
  return nums;
};
console.log(removeDuplicates([1, 1, 3, 5, 6, 2, 1, 2]));
nums = "010";
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

console.log(minOperations(nums));

function minOperationsToAlternate(s) {
  let change0to1 = 0;
  let change1to0 = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] !== "0") {
        change1to0++;
      } else {
        change0to1++;
      }
    } else {
      if (s[i] !== "1") {
        change0to1++;
      } else {
        change1to0++;
      }
    }
  }

  return Math.min(change0to1, change1to0);
}

// Example usage:
const s = "1110010";
const result = minOperationsToAlternate(s);
console.log(result);

function largestOddNumber(num) {
  let currentSubstring = "";
  let result = "";

  for (const digit of num) {
    const currentDigit = parseInt(digit);

    if (currentDigit % 2 === 1) {
      // Include the odd digit in the current substring
      currentSubstring += digit;
    }

    // Update the result if the current substring is larger
    if (currentSubstring.length > result.length) {
      result = currentSubstring;
    }
  }

  return result;
}

// Example usage:
const num = "35427";
const result1 = largestOddNumber(num);
console.log(result1);
