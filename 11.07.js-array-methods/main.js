const numbers = [0, 3.14, 9.81, 37, 98.6, 2, 100, 8]; // array of numbers
const fruits = ["banana", "orange", "mango", "orange", "lemon", "orange"]; // array of strings, fruits

// console.log(numbers.length); // 6

// pop, push, shift, unshift

// console.log(numbers.push(15, 28)); //8
// console.log(numbers.pop());

// console.log(numbers);

// console.log(fruits.shift());
// console.log(fruits);
// fruits.unshift("strewberry", "pineapple");

// console.log(fruits);

//at
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

console.log(vegetables.at(3));

// console.log(vegetables.at(vegetables.length - 1)); // carrot
console.log(vegetables.at(-1)); //carrot

//concat

let vegetablesAndFruits = vegetables.concat(fruits);
// let vegetablesAndFruits = vegetables.concat(fruits, numbers);
// console.log(vegetablesAndFruits);

// array copy with spread operator

// let newArr = [...vegetables, ...fruits];
// console.log(newArr);

//slice

// console.log(countries.slice());
// console.log(countries.slice(2));
// console.log(countries.slice(1, 4));
// console.log(countries.slice(-2));
// console.log(countries.slice(-4, -2));

const webTech = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
//splice

// webTechs.splice(2, 1);
// webTechs.splice(2, 2);
// webTechs.splice(3, 1, "Nigar", "Gulnar");
// webTechs.splice(3, 1, "Nigar", "Gulnar");

// console.log(webTechs);

//indexOf

// let index = webTechs.indexOf("react"); // -1
// let index = webTechs.indexOf("React"); // 3

// webTechs.splice(4, 0, "Angular");
// console.log(webTechs);

const webTechsNew = [
  "HTML",
  "React",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "React",
  "MongDB",
]; // array of web technologies

// console.log(webTechsNew.indexOf("React")); // 1
console.log(webTechsNew.indexOf("React", 2)); // 4
console.log(webTechsNew.indexOf("React", 5)); // 77

// lastIndexOf

console.log(webTechsNew.lastIndexOf("React")); // 7

//includes

// console.log(webTech.includes("HTML"));  //true
// console.log(webTech.includes("Vue")); //false

//join

// let str = fruits.join("-");
let str = fruits.join(", ");

console.log(str);

// let newStr = "lorem ipsum";

// console.log(newStr.split(""));

//forEach vs map

console.log(webTech.length);
// webTech.forEach((element, index, array) => {
//     console.log(`${index}. ${element}`);
// //   console.log(array);
// });

let sum = 0;
numbers.forEach((item, i, array) => {
  sum += item;
});
console.log("sum: ", sum);

//map

let newNums = numbers.map((item, index, array) => {
  return item * 2;
});

console.log(newNums);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// let newCountries = countries.map((item, i) => {
//   return item.substring(0, 3).toLocaleUpperCase();
// });

let newCountries = countries.map((item, i) =>
  item.substring(0, 3).toLocaleUpperCase()
);

console.log(newCountries);
// let user = {
//   fullName: "lorem ipsum",
//   email: "lorem@gmail.com",
//   greeting: function () {
//     console.log("helooo");
//   },
// };

// user.greeting();

// let array = {
//   forEach: function (elem, index, array) {},
//   map: function (elem, index, array) {},
// };

//findOIndex

console.log(numbers.findIndex((elem) => elem > 10)); //3
console.log(countries.findIndex((elem) => elem[0] === "D")); // 1

//find

console.log(countries.find((elem) => elem[0] === "D")); // denmark

//filter

let nums = numbers.filter((item, i) => item > 10 && item < 99);

console.log(nums);
