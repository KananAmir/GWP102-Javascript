const numbers = [44, 0, 3.14, 9.81, 37, 98.6, 2, 100, 8];
// const fruits = ["banana", "orange", "mango", "orange", "lemon", "orange"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const webTechs = [
  "HTML",
  "React",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "React",
  "MongDB",
];

//every
// console.log(numbers.every((item) => item > 0)); //false
// console.log(numbers.every((item) => item >= 0)); //true

// some
// console.log(numbers.some((item) => item > 0)); //true
// console.log(numbers.some((item) => item >= 0)); //true

// console.log(fruits.some((item) => item[0] === "a")); // false
// console.log(fruits.some((item) => item[0] === "o")); // false

//sort

// webTechs.sort();
// console.log(webTechs);

// numbers.sort();

// console.log(numbers);

numbers.sort((a, b) => a - b); //ascending
// console.log(numbers);

// numbers.sort((a, b) => b - a); //descending

// console.log(numbers);

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Bayram", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

// sort by salary
// employees.sort((a, b) => a.salary - b.salary);
// employees.sort((a, b) => b.salary - a.salary);

// sort by name
employees.sort((a, b) => (a.name > b.name ? 1 : -1)); //ascending
employees.sort((a, b) => (a.name < b.name ? 1 : -1)); //descending
console.log(employees);

employees.sort((a, b) => a.name.localeCompare(b.name)); //ascending
employees.sort((a, b) => b.name.localeCompare(a.name)); // descending
// console.log(employees);
//reverse
// vegetables.reverse();

// console.log(vegetables);

// console.log("a" > "b"); // false / 97 > 98
// console.log("A" > "a"); //false / 65 > 97

//reduce

// let sum = numbers.reduce((acc, curr, index, arr) => acc + curr); // acc = 44, curr = 0
let sum = numbers.reduce((acc, curr, index, arr) => acc + curr, 0); // acc = 0, curr = 44

// console.log(sum);

// let cem = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   cem += numbers[i];
// }

// let sumOfSalaries = employees.reduce((acc, curr) => acc + curr.salary, 0);

// console.log(sumOfSalaries);

// console.log(webTechs.reduce((acc, curr) => acc + ", " + curr, "Guller"));

//flat

let arr = [1, 2, [3, 4], [5, 6, [7, 8, [9]]]];

// let newArr = arr.flat();
// let newArr = arr.flat(2);
// let newArr = arr.flat(3);

// console.log(newArr);

// let nums = [1, 2, [3, 4], [5, 6]];

// console.log(nums.flatMap((elem) => (elem === 2 ? ["a", "b"] : "c")));

// fill

const fruits = ["banana", "orange", "mango", "orange", "lemon", "orange"];

// fruits.fill("salam");
// fruits.fill(1);
// fruits.fill("x", 3);
// fruits.fill("x", 3);
// fruits.fill("y", 4);
// fruits.fill("z", 5);

console.log(fruits);

// let emptyArr = new Array(10);

// emptyArr.fill("x");
// console.log(emptyArr);

//from

// let str = "ganja";

// console.log(str.split(""));
// console.log(Array.from(str));

let square = Array.from([1, 2, 3], (elem) => elem ** 2);

console.log(square);
