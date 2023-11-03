//alert, prompt, confirm

//alert
// window.alert("hello");

//prompt
// let userName = prompt("Enter your name, pls!!");
// let userName = prompt("Enter your name, pls!!", "Mrs. Shalala");

// console.log(userName);

//confirm

// let bool = confirm("Are u sure to delete product??");

// console.log(bool);

// bool ? console.log("deleted") : console.log("do not delete");

//type conversions

// console.log(typeof typeof true);

// falsy values: null, undefined, NaN, 0, -0, false, ``, ""

// !! operator

console.log(!!"salam"); //true
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!15); //true

console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number

// implicit vs explicit

//implicit type conversions
console.log("10" - 4); // 6
console.log(10 - "4"); // 6
console.log("7" * 15); // 105
console.log("7a" * 15); // NaN
console.log(true + true); // 2
console.log(true - 5); // -4

console.log("2" + 16); // 216
console.log(2 + "16"); //216

console.log(true + "salam"); //truesalam
console.log(true + "1"); //true1
console.log(true + 2); //3

console.log(3 + 5 + "4"); //84
console.log(typeof (3 + 5 + "4")); //string
console.log(3 + "5" + 4); //354

console.log("true" + false); //truefalse
console.log(true + "false"); //truefalse

let number = 45;
console.log("" + number); // "45"

let str = "44";
console.log(+str);

//explicit type conversions

//Boolean
//Number
//String

console.log(Boolean(undefined)); //false
console.log(Boolean("undefined")); //true
console.log(Boolean(NaN)); //false
console.log(Boolean(544)); //true

console.log(String(45)); // "45"
console.log(String(false)); //"false"
console.log(String(undefined)); // "undefined"

console.log(Number("67")); // 67
console.log(Number(true)); // 1
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number(undefined)); //NaN
console.log(Number("5c")); // NaN
console.log(Number(NaN)); // NaN

/////////

// parseInt, parseFloat, toString

console.log(parseInt(-12.45)); //-12
console.log(parseInt(12.45)); //12
console.log(parseInt(12)); //12
console.log(parseInt("12")); //12
console.log(parseInt("12.45")); //12
console.log(parseInt("12salam")); //12
console.log(parseInt("salam12")); //NaN

// console.log(parseFloat("12.45"));/12.45
console.log(parseFloat(12.45)); //12.45
console.log(parseFloat("12.45abc")); //12.45

console.log(parseInt("ff", 16)); //255
console.log(parseInt("1000", 2)); //8

//toString()

let num = 123;

console.log(num.toString()); // "123"
console.log(num.toString(2)); // "111"
console.log(num.toString(16)); // "7b"

