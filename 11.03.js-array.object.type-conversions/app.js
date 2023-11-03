let array = [4, 5, 3, 8, 7];

// let arr = new Array(); // empty array -> []

// let arr = new Array(5); // array with lenght 5

// arr[0] = "Guller";
// console.log(arr);
let arr2 = new Array(1, 3, 6, 4, 9);

// console.log(array);
// console.log(arr2);
// console.log(arr);

//length

// console.log("LENGTH: ", array.length); //4

let students = ["Gulputa", "Fidan", "Salima", "Nigar"];

//to empty array
// students.length = 0;
// console.log("students", students);

students.length = 3;
console.log("students", students);

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

console.log(students[2]); //Salima
console.log(students[0]); //Gulputa
console.log(students[students.length - 1]); //Nigar

//find average of results

// let results = [85, 56, 95, 45, 60, 99, 78];

// let sum = 0;
// for (let i = 0; i < results.length; i++) {
//   sum += results[i];
// }
// let avarege = sum / results.length;
// console.log("SUM", sum);
// console.log("AVERAGE", avarege);

//push, pop, shift, unshift

let cities = ["Ganja", "Baku", "Goranboy", "Agdash", "London", ["a", "b", "c"]];

// cities[0] = "London";
// cities[cities.length - 1] = "Gakh";

// console.log("Cities :", cities);

//push - add item to the end of array
// cities.push("Gakh");

//pop - delete item from the end of array

// console.log(cities.pop()); // returns deleted item

// cities.pop();
// console.log(cities);

//shift - deletes item from begining

// cities.shift();
// console.log(cities);

//unsshift - add item to the begining

// cities.unshift("Shamkir");
// console.log(cities);

let numbers = [23, 6, 97, 4444, 987, 18];

// console.log(Math.max(...number));

let max = numbers[0]; //23

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

// console.log("MAX: ", max);

let min = numbers[0]; //23

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
// console.log("MIN: ", min);

// copy - shallow vs deep

// let newCities = cities; // shallow

// console.log(newCities);

// newCities.pop();

// console.log("newCities: ", newCities);
// console.log("cities: ", cities); //original array

// let newCities = [...cities]; //deep

// console.log(newCities);

// newCities.shift();

// console.log(newCities[newCities.length - 1][0]); // a
// newCities[newCities.length - 1][0] = "salam";
// console.log(newCities);
// console.log(cities);

// console.log("newCities: ", newCities);
// console.log("cities: ", cities); //original array

//deep copy with structuredClone

//------------------------- deep copy with - json stringify, json parse     ---------------------------

let newCities = structuredClone(cities);

// newCities[newCities.length-1] // ["a, "b", "c"]
// newCities[newCities.length - 1][0]; // "a"

// newCities[newCities.length - 1][0] = "salam";
// console.log(newCities);
// console.log(cities); //original

// let str = "salam";
// let newStr = ``;
// for (i = str.length - 1; i >= 0; i--) {
//   // console.log(str[i]);
//   newStr += str[i];
// }
// console.log(newStr);

//Objects

//object litheral
let userObject = {
  userName: "Lorem Ipsum",
  email: "lorem@gmail.com",
  age: 19,
  position: "FE developer",
  skills: ["html", "css", "js"],
};

console.log(userObject);

userObject.email = "ipsum@gmail.com";
console.log(userObject.email);
console.log(userObject.position);
console.log(userObject["age"]);
console.log(userObject["userName"]);
// console.log(userObject["user name"]);

let newObj = { ...userObject };
// let newObj = userObject; //shallow copy

//loop - for of, for in

for (let item in userObject) {
  // console.log(item); //propery names
  // console.log(userObject[item]); // only values
  console.log(`${item} - ${userObject[item]}`); // only values
}

let nums = [1, 2, 3, 4, 5];

for(let item of cities){
  console.log(item);
}
