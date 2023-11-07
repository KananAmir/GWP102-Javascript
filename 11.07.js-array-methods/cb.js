//higher order function

function myFunc(callback, name) {
  let result = callback(name);
  return result;
}

// let test = () => {
//   console.log("I am cb");
// };

console.log(myFunc(sayHi, "gwp"));

//callback function
function sayHi(name) {
  return `Hello ${name}`;
}  

(function (user) {
  console.log(`I am ${user}`);
})("Selime");
