let arr = [1, 2, 2, 2, 4, 3, 3, 2, 4, 7, 5, 7, 6];

//1. remove dublicated values

result: [1, 2, 4, 3, 5, 7, 6];

// function removeDuclicat(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// function removeDuclicat(arr) {
//   let result = [];

//   arr.forEach((item) => {
//     !result.includes(item) && result.push(item);
//   });

//   return result;
// }

function removeDuclicat(arr) {
  let result = [...new Set(arr)];
  return result;
}

console.log(removeDuclicat(arr));

//2. Yuxaridaki arrayda hər hansı ədədin neçe defe tekrarlandigini tapan funksiya yazın

function findCountDigitOfArray(array, number) {
  let count = 0;
  array.forEach((elem) => {
    elem === number && count++;
  });

  return `${number} ededi ${count} defe tekrarlanir`;
}

console.log(findCountDigitOfArray(arr, 7)); // 7 ədədi 2 dəfə təkrarlanır
console.log(findCountDigitOfArray(arr, 2)); // 2 ədədi 4 dəfə təkrarlanır

//3. generate otp (4 rəqəmli otp kodu yaradan funksiya yazın)

// function generateOtp() {
//   let otp = "";

//   for (let i = 0; i < 4; i++) {
//     otp += Math.floor(Math.random() * 10);
//   }

//   return otp;
// }

function generateOtp() {
  let digits = "0123456789";
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  return otp;
}

console.log(generateOtp()); //1532
console.log(generateOtp()); //6834
console.log(generateOtp()); //6396

let myArr = [1, 4, true, false, 0, 5, "hello", NaN, undefined];

// 4. find all truth values in myArr

// console.log(myArr.filter((item) => Boolean(item))); //all trues values
console.log(myArr.filter(Boolean)); //all trues values
console.log(myArr.filter((item) => !Boolean(item))); //all false values

//5. Arraydaki en boyuk ededi tapan ve nece defe tekrarlandigini gosteren funksiya yazın

function findMaxDigitCount(array) {
  let max = Math.max(...array);

  let count = 0;
  array.forEach((elem) => {
    elem === max && count++;
  });

  return `${max} ededi ${count} defe tekrarlanir`;
}

console.log(findMaxDigitCount(arr)); // max ədədi 7 dir və 2 dəfə təkrarlanır
