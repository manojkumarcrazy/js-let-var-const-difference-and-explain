  ////  <-----------  Primitive Data Types ----------> 


//   <


//       1.Number
//       2.Boolen
//       3.String
//       4.Undefined
//       5.Null
//       6.Bigint
//       7.Symbol



//       > 


// // Objects
// Objects are collections of key-value pairs. Keys are strings (or Symbols), and values can be any type, including other objects.

// Object

// General-purpose data structure to store collections of data.
// Example: let obj = { name: 'Alice', age: 25 };.
// Array

// Ordered collections of values.
// Example: let arr = [1, 2, 3, 4];.
// Function

// Objects that can be called to execute code.
// Example:
// javascript
// Copy code
// function greet() {
//   console.log('Hello!');
// }
// Date

// Represents dates and times.
// Example: let now = new Date();.
// RegExp

// Represents regular expressions.
// Example: let pattern = /ab+c/;.
// Map

// Collections of key-value pairs where keys can be of any type.
// Example:
// javascript
// Copy code
// let map = new Map();
// map.set('key', 'value');
// Set

// Collections of unique values.
// Example:
// javascript
// Copy code
// let set = new Set();
// set.add(1);
// set.add(2);
// WeakMap

// Similar to Map but keys are objects and they are weakly referenced.
// Example:
// javascript
// Copy code
// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, 'value');
// WeakSet

// Similar to Set but values are objects and they are weakly referenced.
// Example:
// javascript
// Copy code
// let weakSet = new WeakSet();
// let obj = {};
// weakSet.add(obj);
// Type Checking
// To check the type of a variable, JavaScript provides the typeof operator:

// javascript
// Copy code
// console.log(typeof 42); // "number"
// console.log(typeof 'hello'); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (this is considered a bug in JavaScript)
// console.log(typeof Symbol()); // "symbol"
// console.log(typeof 1234567890123456789012345678901234567890n); // "bigint"
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function(){}); // "function"
// Special Cases
// Arrays: typeof returns "object", so to check for an array, use Array.isArray().
// javascript
// Copy code
// console.log(Array.isArray([])); // true
// Null: typeof returns "object", but to specifically check for null, use a strict equality check.
// javascript
// Copy code
// let x = null;
// console.log(x === null); // true
// Understanding these data types and how to check them is fundamental for effective JavaScript programming.