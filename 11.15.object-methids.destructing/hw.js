const numbers = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];

// 1. numbers array'ni artan sıra ilə düzün

const products = [
  { name: "one Product 1", price: 20, category: "Electronics" },
  { name: "two Product 2", price: 80, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 170, category: "Electronics" },
];

// 2. products array'ni name'ə və price'a görə artan sıra ilə düzün

// 3. products array'ində price'i 50'dən böyük olan productların price'larının cəmini tapın

// let filtered = products
//   .filter((item) => item.price > 50)
//   .reduce((acc, curr) => acc + curr.price, 0);

let filtered = products.reduce(
  (acc, curr) => (curr.price > 50 ? acc + curr.price : acc),
  0
);

console.log(filtered);

// 4. students array-ində tələbələrin ortalaması ən yüksək olanı,
// ortalaması 90-dan yuxarı olanı və tələbələrin
// oratalamsı azalan sıra ilə düzən program tərtib edin

const students = [
  { name: "Ali", scores: [90, 85, 92] },
  { name: "Mammal", scores: [75, 80, 85] },
  { name: "Camil", scores: [90, 95, 85] },
  { name: "Davud", scores: [100, 100, 100] },
];

let filteredStudents = students.map((item) => {
  let obj = {
    ...item,
    average: item.scores.reduce((acc, curr) => acc + curr) / item.scores.length,
  };
  return obj;
});

// console.log(filteredStudents.sort((a, b) => b.average - a.average)[0]);
// console.log(filteredStudents.filter((item) => item.average >= 90));
console.log(filteredStudents.sort((a, b) => b.average - a.average));

const cities = ["agdash", "baku", "ganja", "goychay", "mingachevir", "shirvan"];

// 5. cities arrayindən hər bir elementinin ilk hərfi böyük hərf olan yeni bir array qaytaran funksiya yazın

// function getUpper(arr) {
//     ...
// }

// console.log(getUpper(cities)); // ["Agdash", "Baku", "Ganja", "Goychay", "Mingachevir"];

// 6. cities arrayindən hər bir elementinin ilk hərfi və son hərfi böyük hərf olan yeni bir array qaytaran funksiya yazın

// function getUpper2(arr) {
//     ...
// }

// console.log(getUpper2(cities)); // ["AgdasH", "BakU", "GanjA", "GoychaY", "MingacheviR"];
