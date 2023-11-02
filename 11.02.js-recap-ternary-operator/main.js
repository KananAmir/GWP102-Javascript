//Math

// floor;
// ceil;
// round;
// trunc;
// min;
// max;
// sign;
// pow;
// sqrt;
// abs;
// random;

let number = -15.47;

// console.log(Math.floor(number)); // 15
// console.log(Math.ceil(number)); // 16
// console.log(Math.round(number)); // 16
// console.log(Math.trunc(27.543)); // 27

// console.log(Math.min(3, 54, 25, 7)); // 3
// console.log(Math.max(3, 54, 25, 7)); // 54

// console.log(Math.sign(-15)); // -1
// console.log(Math.sign(15)); // 1

// console.log(Math.pow(3, 4)); //81
// console.log(Math.sqrt(64)); //8

// console.log(Math.abs(-34)); //34

//random

// console.log(Math.floor(Math.random() * 10));

//generate 10-25 random

// Math.floor(Math.random() * (max - min) + min);
// console.log(Math.floor(Math.random() * 15 + 10));
// console.log(Math.round(Math.random() * 15 + 10));

// color: rgb(255, 255, 255)

// Math.round(Math.random() * 255);

// ternary operotor - ?

let age = 27;

// if (age >= 18) {
//   console.log("wellcome");
// } else {
//   console.log("ur age is little then");
// }

age >= 18 ? console.log("wellcome") : console.log("ur age is little then");
// age >= 18 ? console.log("wellcome") : null;

age >= 18 && console.log("wellcome");
