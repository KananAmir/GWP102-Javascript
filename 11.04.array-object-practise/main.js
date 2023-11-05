// Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın

let array = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let maxLength = array[0].length;
let maxIndex = 0;
for (let i = 0; i < array.length; i++) {
  //   console.log(array[i].length);
  if (array[i].length > maxLength) {
    maxLength = array[i].length;
    maxIndex = i;
  }
}

console.log(array[maxIndex]); // 9

//object litheral
let user = {
  userName: "lorem",
  email: "lorem@gmail.com",
};

// delete user.email;
let obj = new Object(); // constructure
obj.name = "ipsum";
console.log(obj);

// console.log(user.userName);
// console.log(user["userName"]);
//array of objects
const products = [
  { name: "one Product 1", price: 20, category: "Electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
];

//only price more tha 50 objects
let filteredProducts = [];
// for (let i = 0; i < products.length; i++) {
//   //   console.log(products[i].price);
//   //   if (products[i].price > 50) {
//   //     // console.log(products[i]);
//   //     filteredProducts.push(products[i]);
//   //   }

//   products[i].price > 50 && filteredProducts.push(products[i]);
// }

// console.log("filteredProducts", filteredProducts);

//50 dən böyük və catagory elektroniks olanlar
// for (let i = 0; i < products.length; i++) {
//   products[i].price > 50 &&
//     products[i].category.toLocaleLowerCase() === "electronics" &&
//     filteredProducts.push(products[i]);
// }

// 50 dən böyük və catagory "c" ilə başlayan
for (let i = 0; i < products.length; i++) {
  products[i].price > 50 &&
    products[i].category.toLocaleLowerCase()[0] == "c" &&
    filteredProducts.push(products[i]);
}

console.log("filteredProducts", filteredProducts);

//Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.

let companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "APPLE",
  "IBM",
  "Oracle",
  "Amazon",
];


// 3. APPLE
// 4.IBM



let arr=[3,8,2,5,4,10,7,6]

//Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.


//Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin
