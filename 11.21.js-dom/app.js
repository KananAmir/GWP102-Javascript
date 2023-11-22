let submitBtn = document.querySelector(".submit");
let userName = document.querySelector("#username");
let userAge = document.querySelector("#age");

submitBtn.addEventListener("click", function () {
  console.log(+userName.value);
  console.log(+userAge.value);
});

let cont = document.querySelector(".container");
let liElem = document.querySelector(".li-elem");

// console.log(cont.children);
// console.log(cont.children[0].innerHTML);

// console.log(liElem.closest("ul"));
console.log(liElem.closest("div"));
