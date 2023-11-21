// setTimeout(
//   (a, b, c) => {
//     console.log(a + b + c);
//   },
//   3000,
//   5,
//   6,
//   7
// );

// let testFunc = (className) => {
//   console.log(`Hello ${className}`);
// };

// setTimeout(testFunc, 2000, "gwp102");

let heading = document.querySelector("#heading");

//createElement, remove
//style
//attributes
//classlist

const users = [
  {
    name: "Anar",
    surname: "Hesenli",
    age: "22",
    uni: "ADA",
    gender: "male",
    salary: "3001",
  },
  {
    name: "Nicat",
    surname: "Sadiqov",
    age: "25",
    uni: "GDU",
    gender: "male",
    salary: "200",
  },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
    salary: "300",
  },
  {
    name: "Hikmet",
    surname: "Hesenov",
    age: "22",
    uni: "UNEC",
    gender: "male",
    salary: "320",
  },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "GDU",
    gender: "male",
    salary: "420",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
    salary: "3210",
  },
];

users.forEach((item) => {
  let liElem = document.createElement("li");
  liElem.innerText = item.name;
  liElem.setAttribute("class", item.gender);
  document.querySelector(".list").append(liElem);
});

let allLiELements = document.querySelectorAll("li");

allLiELements.forEach((item) => {
  item.addEventListener("click", function () {
    // console.log(this.innerText);
    this.remove();
  });
});
//setAttribute, removeAttribute, getAttribute, hasAttribute

console.log(heading.innerText);

let change = document.querySelector(".change");
let parag = document.createElement("p");

parag.innerText = "lorem ipsum";
parag.style.color = "teal";
parag.style.fontSize = "2rem";
parag.style.fontWeight = "bold";

document.body.prepend(parag);

change.addEventListener("click", function () {
  parag.setAttribute("class", "bg-red");
});

// console.log(heading.getAttribute("id"));
// console.log(change.getAttribute("title"));
// console.log(document.querySelector(".list").removeAttribute("class"));
// console.log(change.hasAttribute("title")); //true
// console.log(change.hasAttribute("href")); //false

let clickBtn = document.querySelector(".click");

// clickBtn.addEventListener("click", function () {
//   console.log("gdu");
// });
// clickBtn.addEventListener("click", function () {
//   console.log("gwp");
// });

// clickBtn.onclick = function () {
//   console.log("gwp102");
// };
// clickBtn.onclick = function () {
//   console.log("gwp202");
// };

// let user = {
//   userName: "lorem ipsum",
// };

// user.userName = "Gulnar";
// user.userName = "Fidan";

//classList

//add, remove, contains, toogle

heading.classList.add("bg-red");

let textParag = document.querySelector(".text");

// console.log(textParag.classList);

// textParag.classList.remove("bg-green");

console.log(textParag.classList.contains("bg-green"));
console.log(textParag.classList.contains("test"));

let addBtn = document.querySelector(".add");
let removeBtn = document.querySelector(".remove");
let customToggle = document.querySelector(".custom-toggle");
let toggle = document.querySelector(".toggle");

addBtn.addEventListener("click", function () {
  textParag.classList.add("bg-green", "font-36");
});
removeBtn.addEventListener("click", function () {
  textParag.classList.remove("bg-green", "font-36");
});
customToggle.addEventListener("click", function () {
  textParag.classList.contains("bg-green")
    ? textParag.classList.remove("bg-green", "font-36")
    : textParag.classList.add("bg-green", "font-36");
});
toggle.addEventListener("click", function () {
  textParag.classList.toggle("bg-green");
  textParag.classList.toggle("font-36");
});

//className vs classList

let spanElem = document.querySelector(".lorem");
// spanElem.className = "test";
spanElem.className += " test";
spanElem.classList.add("test");
console.log(spanElem.className);

//parentElement

console.log(spanElem.parentElement.parentElement); //body
console.log(spanElem.parentElement); //div.container
console.log(spanElem.parentElement.firstElementChild); //span
console.log(spanElem.parentElement.lastElementChild); //p.last
