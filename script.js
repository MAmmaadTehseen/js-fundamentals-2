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
//array methods

//splice
let arr2 = ["I", "study", "JavaScript"];
arr2.splice(1, 1); // from index 1 remove 1 element
console.log(arr2);
arr2.splice(0, 3, "Let's", "dance");
console.log(arr2);

//slice
let arr3 = ["t", "e", "s", "t"];
console.log(arr3.slice(1, 3));
console.log(arr3.slice(-2));

//concat
let arr4 = [1, 2];
console.log(arr4.concat([3, 4]));

//forEach
let arr5 = [1, 2, 3];
arr5.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

//indexOf
let arr6 = [1, 0, false];
console.log(arr6.indexOf(0));

//lastIndexOf
let arr7 = [1, 0, false, 1, 0, false];
console.log(arr7.lastIndexOf(0));

//includes
let arr8 = [1, 0, false];
console.log(arr8.includes(1));

//find
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
let user = users.find((item) => item.id == 1);
console.log(user.name);

//filter
let users2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
let someUsers = users2.filter((item) => item.id < 3);
console.log(someUsers);

//map
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(lengths);

//sort
let arr9 = [1, 2, 15];
arr9.sort();
console.log(arr9);

//reverse
let arr10 = [1, 2, 3, 4, 5];
arr10.reverse();
console.log(arr10);

//split
let names = "Bilbo, Gandalf, Nazgul";
let arr11 = names.split(", ");
for (let name of arr11) {
  console.log(`A message to ${name}.`);
}

//join
let arr12 = ["Bilbo", "Gandalf", "Nazgul"];
let str = arr12.join(";");
console.log(str);

//reduce
let arr13 = [1, 2, 3, 4, 5];
let result = arr13.reduce((sum, current) => sum + current, 0);
console.log(result);

//Array.isArray
console.log(typeof {});
console.log(typeof []);

//-----------------------------------------------------------------------------------//

//map
let map = new Map();

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key
console.log(map.get(1));
console.log(map.size);

//map iteration
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
} // cucumber, tomatoes, onion
for (let amount of recipeMap.values()) {
  console.log(amount);
} // 500, 350, 50
for (let entry of recipeMap) {
  console.log(entry);
} // cucumber,500 (and so on)

//set
let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);

//set iteration
for (let user of set) {
  console.log(user.name);
}

//weakMap
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok");
console.log(weakMap.get(obj));

//weakSet
let visitedSet = new WeakSet();
let john2 = { name: "John" };
let pete2 = { name: "Pete" };
let mary2 = { name: "Mary" };
visitedSet.add(john2);

//-----------------------------------------------------------------------------------//
