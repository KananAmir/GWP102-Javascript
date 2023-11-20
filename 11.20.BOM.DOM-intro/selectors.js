let logo = document.querySelector(".container .logo"); //element
let logos = document.querySelectorAll(".container .logo"); //node list

// let texts = document.getElementsByClassName("text"); //html collection

let texts = document.getElementsByTagName("p"); //html collection

let city = document.getElementById("city"); //element

let inputs = document.getElementsByName("user-info"); //node list

// console.log(logo);
console.log(logos);
console.log(texts);
console.log(city);
console.log(inputs);

// console.log(window.document.documentElement);
// console.log(window.document.body);
// console.log(window.document.head);

//innerHtml, innerText, textContent

console.log(city.innerHTML);
console.log(city.innerText);
console.log(city.textContent);

let container = document.querySelector(".container");
//createElement

let pElement = document.createElement("p");
let spanElement = document.createElement("span");

// pElement.innerText = "Lorem Ipsum Dolor";
pElement.innerHTML = "<strong>Lorem</strong> Ipsum Dolor";
spanElement.innerText = "hello";
// container.prepend(pElement);
// city.before(pElement);

// city.after(pElement);

// container.appendChild(pElement);

container.append(pElement, spanElement);
city.append(`hello`);
