let result = document.querySelector(".result");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

result.style.color = "red";
result.style.fontSize = "1rem";
console.log(result);

let count = 0;
let countInterval;

// startBtn.addEventListener("click", function () {
//   //   console.log("start btn");
//   // this.style.backgroundColor = "red"

//   clearInterval(countInterval);

//   countInterval = setInterval(() => {
//     result.innerText = ++count;
//   }, 100);
// });

// stopBtn.addEventListener("click", function () {
//   //   console.log("stop btn");
//   clearInterval(countInterval);
//   //   count = 0;
//   //   result.innerText = 0;
// });
// resetBtn.addEventListener("click", function () {
//   count = 0;
//   result.innerText = 0;
//   clearInterval(countInterval);
// });

startBtn.addEventListener("click", function () {
  this.setAttribute("disabled", "true");
  stopBtn.removeAttribute("disabled");
  countInterval = setInterval(() => {
    result.innerText = ++count;
  }, 100);
});

stopBtn.addEventListener("click", function () {
  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", null);
  clearInterval(countInterval);
});
resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);

  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});
