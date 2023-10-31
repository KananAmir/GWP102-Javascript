//comparison operators

// =, ==, ===

// = assignment
// == comparison
/// === strict comparison

// != , !==

let a = 5;
let b = "5";

console.log(typeof a);
console.log(typeof b);
console.log(a == b); //true
console.log(a === b); //false

console.log(true == 1); //true
console.log(true === 1); //false

// console.log(a > b);

// let result = a != b;
let result = a !== b;

console.log("Result", result);

//Logical operators

// && , || , !

// console.log(4 > 7 && 15 < 3);
// console.log(4 < 7 && 15 > 3);

// console.log(4 < 7 || 15 < 3);

// FALSY VALUES in JS

// false, 0, -0, null, undefined, NaN, "", ``;

// all numbers except 0 and non-empty strings are true values
console.log(15 > 4 && 17 && 6 > 3 && 5); // 5
console.log(15 > 4 && null && 6 > 3 && 5); // null

// && falsy dəyər axtarır, tapanda onu return edir, tapmasa sonuncu true value'nu qaytarır
// || true təyər axtarır, ilk tapdığı true dəyəri return edir. Əgər true dəyər tapmasa ən sonuncu falsy ddəyəri return edir

console.log(12 < 3 || NaN || 267); // 267
console.log(12 < 3 || NaN || 3 < 1); // false
console.log(12 < 3 || NaN || undefined); // undefined
console.log(12 < 3 || NaN || undefined || "Ramida"); // "Ramida"

console.log((true && NaN) || (5 < 78 && undefined)); //undefined
console.log((true && NaN) || (5 < 78 && "Salam")); //"Salam"

let userAge = 22;

// userAge >= 18 && console.log("Wellcome !!");
userAge >= 18 && console.log("Wellcome !!");

let productCount = 0;

25 < 5 && productCount++;

console.log("productCount", productCount);

// ?? - nullish coalescing

// console.log(4 > 5 || "hello gwp102");
console.log("nullish check: ", 4 < 2 ?? "hello gwp102");
console.log("nullish check: ", undefined ?? "hello gwp102");
console.log(null ?? "hello gwp102");
console.log(NaN ?? "hello gwp102");

// NaN - not a number

console.log("type of nan: ", typeof NaN);
console.log("question?? ", typeof typeof NaN);
console.log("a * 25", "a" * 25);
console.log("15 - w", 15 - "w");
// count++, ++count differences

let count = 0;

// count++;

// count = count + 1;
// console.log("count: ", count);

// console.log("count: ", count++);
// console.log("count: ", count);

console.log("count: ", ++count);
console.log("count: ", count);
