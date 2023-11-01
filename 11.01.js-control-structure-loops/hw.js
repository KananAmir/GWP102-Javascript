//3 ədəd verilib. Bu 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytaran proqram tərtib edin.

// let a = 33;
// let b = 7;
// let c = 22;

// (ab - bc) & ac;

// if (a + b > b + c && a + b > a + c) {
//   console.log(`${a} + ${b} = ${a + b} is biggest`);
// } else if (a + c > b + c && a + c > a + b) {
//   console.log(`${a} + ${c} = ${a + c} is biggest`);
// } else {
//   console.log(`${b} + ${c} = ${b + c} is biggest`);
// }

// 3 ədəd verilib. Bu ədədlərin birləşməsindən yaranan ən böyük və ən kiçik 3 rəqəmli ədədi tapan proqram tərtib edin. Məsələn: a=4, b=5, c=6 daxil etdikdə cavab bu şəkildə olmalıdır:
// Big number: 654

// Little number: 456 */

// let a = 4;
// let b = 2;
// let c = 8;

let maxDigit;
let minDigit;
//max - 732
//min - 237

// if (a > b && a > c) {
//   if (b > c) {
//     console.log(maxDigit);
//     // console.log(`${a}${b}${c}`);
//     maxDigit = a * 100 + b * 10 + c;
//     minDigit = c * 100 + b * 10 + a;
//   } else {
//     maxDigit = a * 100 + c * 10 + b;
//     minDigit = b * 100 + c * 10 + a;
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     maxDigit = b * 100 + a * 10 + c;
//     minDigit = c * 100 + a * 10 + b;
//   } else {
//     maxDigit = b * 100 + c * 10 + a;
//     minDigit = a * 100 + c * 10 + b;
//   }
// } else {
//   if (a > b) {
//     maxDigit = c * 100 + a * 10 + b;
//     minDigit = b * 100 + a * 10 + c;
//   } else {
//     maxDigit = c * 100 + b * 10 + a;
//     minDigit = a * 100 + b * 10 + c;
//   }
// }

// console.log("MAX: ", maxDigit);
// console.log("MIN", minDigit);

// I. question) Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib.
// Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını
// yoxlayan proqram tərtib edin.

// let k1 = 4;
// let k3 = 3;
// let h = 5;

// let a = 4;
// let b = 8;
// let c = 5;

// if (
//   a ** 2 + b ** 2 === c ** 2 ||
//   a ** 2 + c ** 2 === b ** 2 ||
//   c ** 2 + b ** 2 === a ** 2
// ) {
//   console.log("Verilən üçbucaq düzbucaqlıdır!");
// } else {
//   console.log("Verilən üçbucaq düzbucaqlı deyil!");
// }

// II. question) 3 rəqəmli hər hansı bir ədəd verilib.
// Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin.
// Məsələn: number=652 daxil etdikdə  cavab bu şəkildə olmalıdır:

// Result: 6, 5, 2

// let number = 385;

// let first = number % 10;
// let second = ((number - first) / 10) % 10;
// let third = ((number - first) / 10 - second) / 10;

// console.log(`${third}, ${second}, ${first}`);

// III. question) Ayın adlarına uyğun olaraq neçə gündən ibarət olduğunu cavablandıran alqoritm tərtib edin.
// Alqoritm  Switch Case  vasitəsi yazılsın.

// Məsələn: month="january" dedikdə cavab "january has 31 days",
// month="february" dedikdə cavab "february has 28 days" şəklində olsun

let month = "February".toLocaleLowerCase();

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month} has 31 days`);
    break;
  case "february":
    console.log(`${month} has 28/29 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 days`);
    break;

  default:
    console.log(`${month} is not valid month`);

    break;
}

// swap 2 variable

let a = 5;
let b = 3;

// a = b; //3
// b = a;

// I solution
// let temp;

// temp = a; // 5
// a = b; // 3
// b = temp; //

// II solution

let c = a + b; //8

a = c - a; // 3
b = c - b; // 5


// III solution
[a, b] = [b, a];
console.log(`a: ${a}  -  b: ${b}`);
