const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Bayram", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

const fruits = ["banana", "orange", "mango", "orange", "lemon", "orange"];

let add = document.querySelector(".btn-add");
let remove = document.querySelector(".remove");
let list = document.querySelector(".list");

add.addEventListener("click", function () {
  window.localStorage.setItem("fruits", JSON.stringify(fruits));
  JSON.parse(localStorage.getItem("fruits")).forEach((element) => {
    list.innerHTML += `<li>${element}</li>`;
  });
});

remove.addEventListener("click", function () {
  window.localStorage.removeItem("fruits");
  list.innerHTML = "";
});

document.cookie = "name=Selime";
