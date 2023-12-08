console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

let promise = new Promise((resolve, reject) => {
  resolve(3);
});

promise
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

console.log(4);

// navigator clipboard

const copyBtn = document.querySelector(".copy");
const pasteBtn = document.querySelector(".paste");
const text = document.querySelector(".text");
const result = document.querySelector(".result");

copyBtn.addEventListener("click", function () {
  window.navigator.clipboard.writeText(text.innerText).then(() => {
    console.log("copied");
  });
});

pasteBtn.addEventListener("click", function () {
  window.navigator.clipboard
    .readText()
    .then((text) => {
      result.innerHTML += ` ${text}`;
    })
    .catch((err) => console.log(err));
});
