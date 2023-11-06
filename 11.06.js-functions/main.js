//parameter vs argument

//function declearation, function expression, arrow functions

//function declearation
//without parameter

// function sayHi() {
//   console.log("Hello World!");
// }

// sayHi();

//with parameter
//userName is parameter
function sayHi(userName) {
  console.log(`Hello, ${userName}!!`);
}

sayHi(); // Hello, undefined!!

// "Gulputa" is argument
sayHi("Gulputa"); // Hello, Gulputa!!
sayHi("Fidan"); // Hello, Fidan!!

//default values

function sumOfTwoNumbers(num1 = 0, num2 = 0) {
  let sum = num1 + num2;
  console.log(sum);
}

sumOfTwoNumbers(3, 5); // 8
sumOfTwoNumbers(10, 15); //25
sumOfTwoNumbers(30, -50); //-20
sumOfTwoNumbers(); //0

//return keyword

console.log(calculateSquare(7)); // 49
console.log(calculateSquare(6)); // 36

function calculateSquare(number) {
  let result = number ** 2;

  return result;
}

// calculateSquare() // undefined^2 === NaN

// let res = calculateSquare(5);

// console.log("RES: ", res);

let studentScores = [44, 55, 66, 77, 88, 99];
//write a function that accepts one array and return sum of array elements

function sumOfScores(array) {
  let sum = array[0];
  for (let i = 1; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log(sumOfScores(studentScores));
// console.log(sumOfScores([1,2,3,4,5]));

function findAverage(array) {
  let average = sumOfScores(array) / array.length;
  return average;
}
console.log(findAverage([44, 55, 66, 77, 88, 99]));

//anonimous function

// function () {
//     console.log(`Welcome`);
//   };

//function expression

//without parameter
// let welcome = function () {
//   console.log("Welcome!");
// };

// welcome();

// with parameter
let welcome = function (userName) {
  console.log(`Welcome ${userName}!`);
};
welcome("Briliant");

// let sumOfScoresExpression = function (array) {
//     let sum = array[0];
//     for (let i = 1; i < array.length; i++) {
//       sum += array[i];
//     }

//     return sum;
//   }

//arrow functions

// let sayHello = () => {
//   console.log("Helloooo");
// };

let sayHello = (name) => {
  console.log("Helloooo", name);
};

sayHello("Lorem");

// let calculateSquareArrow = (num) => {
//   return num ** 2;
// };

// let calculateSquareArrow = (num) => num ** 2;

let calculateSquareArrow = (num) => num ** 2;
console.log(calculateSquareArrow(3));

//unlimited parameter

function sumOfUnlimitedNumbers() {
  //   console.log(arguments);
  let sum = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

// console.log(sumOfUnlimitedNumbers(1, 2, 3, 4, 5, 6));

let sumOfUnlimitedNumbersWithArrow = (...args) => {
  let sum = args[0];
  for (let i = 1; i < args.length; i++) {
    sum += args[i];
  }

  return sum;
};

console.log(sumOfUnlimitedNumbersWithArrow(5, 6, 7));

///callback functions   ---->  callBack

let mainFunction = (cb) => {
  cb();
};

function callBack() {
  console.log("I am callback");
}

// higher order function ----> mainFunction
mainFunction(callBack);

// self invoked anonimous function

// without parameter
// (function () {
//   console.log("hello gwp102");
// })();

// with parameter
(function (name) {
  console.log(`Hello ${name}`);
})("gwp");
