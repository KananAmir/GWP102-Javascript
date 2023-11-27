// storages

// localStorage, sessionStorage, cookies

//localStorage
console.log(window.localStorage);

//setItem
//getItem
//removeItem
//clear
//key

// localStorage.setItem("className", "GWP102");
// localStorage.setItem("user", "Jhon Doe");
// localStorage.setItem("number", 1532);
// localStorage.setItem("bool", JSON.stringify(true));

// console.log(typeof localStorage.getItem("number"));
// console.log(JSON.parse(localStorage.getItem("bool")));

// console.log(localStorage.getItem("class")); //null
// console.log(localStorage.getItem("className")); // GWP102

// localStorage.removeItem("className");

// localStorage.clear();

// console.log(localStorage.key(0));
// console.log(localStorage.key(1));
// console.log(localStorage.key(2));

// localStorage.clear();
let students = ["Fidan", "Gulputa", "Nigar", "Shalala", "Nazrin"];

// localStorage.setItem("students", students);
// localStorage.setItem("students", JSON.stringify(students));

// console.log(JSON.parse(localStorage.getItem("students")));

// JSON stringify, JSON parse

// let studentObj = {
//   firstName: "Şərifə",
//   lastName: "Aliyeva",
//   age: 21,
//   email: "sharifa@code.edu.az",
//   universityInfo: {
//     universityName: "GDU",
//     profession: "Math & Informatics teacher",
//     location: "Ganja",
//   },
// };

// localStorage.setItem("student", JSON.stringify(studentObj));

// console.log(JSON.parse(localStorage.getItem("student")));

//sessionStorage

// setItem
// getItem
// removeItem
// clear
// key

// sessionStorage.setItem("studentName", "Brilliant");
// sessionStorage.setItem("studentID", 123);

// console.log(sessionStorage.getItem("studentName"));

// setTimeout(() => {
//   // sessionStorage.removeItem("studentName");
//   sessionStorage.clear();
// }, 3000);

// cookies

// console.log(document.cookie);
document.cookie =
  "university=Ganja;expires=Mon, 27 Nov 2023 07:45:10 GMT;path=/";
console.log(document.cookie);
