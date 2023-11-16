let student = {
  firstName: "Şərifə",
  lastName: "Aliyeva",
  age: 21,
  email: "sharifa@code.edu.az",
  universityInfo: {
    universityName: "GDU",
    profession: "Math & Informatics teacher",
    location: "Ganja",
  },
};

const numbers = [0, 3.14, 9.81, 37, 98.6, 2, 100, 8]; // array of numbers
const fruits = ["banana", "orange", "mango", "orange", "lemon", "orange"]; // array of strings, fruits

// for in vs for of

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (item of fruits) {
  console.log(item);
}
let sum = 0;
for (item of numbers) {
  sum += item;
}

console.log(sum);

//for in

for (item in student) {
  //   console.log(item);
  //   console.log(student[item]);
  console.log(`${item}   ---->>>   ${student[item]}`);
}
