// let, const, var
let firstName = "Kanan";
let lastName = "Amirov";
// var country;
let score = 88;

// console.log(lastName);
// console.log(firstName);

console.log("First Name: ", firstName, "Last Name: ", lastName, score);
console.log(firstName + " " + lastName);

console.log("hello world!!");

// window.alert("test");

// document.write("GWP102");

var cityName = "Ganja";

var cityName = "London";

console.log("City Name: ", cityName);

// var - global variable, function scope

// let vs const - local variable, block scope

{
  let fullName = "Amirov Kanan";
  console.log("FullName: ", fullName);
}

function sayHi() {
  var className = "GWP102";
  console.log("Hello", className);
  console.log(className);
}

console.log("function: ", sayHi()); // undefined - because function does not return anything

let universityName = "GDzU";
// console.log(universityName);

universityName = "BDU";

console.log(universityName);

const BASE_URL = "www.test.com";

// BASE_URL = "oxu.az";

// console.log(BASE_URL);

// DATA TYPES

let count = 2;
let topic = "JS variables";

let isOnline = false;

let userName = null;

console.log(userName);
userName = "Jhon Doe";

console.log(userName);

let color, test;

color = "red";
console.log("color: ", color);
console.log("test: ", test); // undefined - because we decleared variable but do not assign anything it

// object syntax

let userObject = {
  fullName: "Lorem Ipsum",
  age: 55,
  isOnline: true,
};

console.log(typeof color); //string
console.log(typeof count); //number
console.log(typeof isOnline); //boolean
console.log(typeof userObject); // object

// let country;
// console.log(country); //undefined
// country = "AZE";

// console.log(country); // error
// let country = "AZE";

console.log("country", country);
var country = "AZE";

console.log("country", country);

// it understands like var keyword declearation
gulnar = "lorem ipsum dolor";
console.log(gulnar);

// naming conventions

//camelCase
let studentInfo;
//snake_case
let student_info;
//PascalCase
let StudentInfo;

// let, function, class,  return words, u can not use as a variable name
// let let = "asdas";

// const return = "sdas";
