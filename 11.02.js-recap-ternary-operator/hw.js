// 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

let number = 385;

let first = number % 10;
let second = ((number - first) / 10) % 10;
let third = ((number - first) / 10 - second) / 10;

let sum, multiply, average;

sum = third + second + first;
multiply = third * second * first;
average = parseInt((third + second + first) / 3);

console.log(`SUM: ${sum}, MULTIPLY: ${multiply}, AVERAGE: ${average}`);

// 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

let num = 34;

// for (let i = 0; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

// let count = 0;
// for (let i = 0; i <= num; i++) {
//   if (num % i === 0) {
//     count++;
//   }
// }

// console.log(count);

// 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  0 x 0 = 0
//  1 x 1 = 1
//  2 x 2 = 4
//  3 x 3 = 9
//  4 x 4 = 16
//  5 x 5 = 25
//  6 x 6 = 36
//  7 x 7 = 49
//  8 x 8 = 64
//  9 x 9 = 81
//  10 x 10 = 100

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }
// 5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// console.log(`i i^2 i^3`);
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i ** 2} ${i ** 3}`);
// }

// 6)  0 - 100 arası yalnız sadə ədədləri console'da çap edin

// let isPrime = true;
// let primeNumber = 7;

// for (let i = 2; i < primeNumber; i++) {
//   if (primeNumber % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime === true) {
//   console.log(`${primeNumber} is prime`);
// } else {
//   console.log(`${primeNumber} is not prime`);
// }

let bool = true;

for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j === 0) {
      // console.log(i);
      bool = false;
      break;
    }
  }
  if (bool) console.log(i);
  bool = true;
}

// 7) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın

// let odd = 0;

// let even = 0;
// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }

// console.log("ODD: ", odd);
// console.log("EVEN: ", even);
