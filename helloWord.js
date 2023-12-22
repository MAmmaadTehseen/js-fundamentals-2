// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

let createHelloWorld = function () {
  return function (...args) {
    return `Hello World`;
  };
};

// Example usage:
const f = createHelloWorld();
alert(f()); // "Hello World"
