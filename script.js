`use strict`;

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

//Nullish coalescing operator '??'
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let user;
console.log(user ?? "Anonymous"); // Anonymous

//  break <labelName>
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // what if we want to exit from here to Done (below)?
    if (!input) break outer;
  }
}

console.log("Done!");
