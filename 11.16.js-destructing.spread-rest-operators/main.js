// object litheral

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
  getStudentInfo: function () {
    return `I am ${this.firstName} ${this.lastName}. I am studying at ${this.universityInfo.universityName}. My profession is ${this.universityInfo.profession}`;
  },
};

console.log(student.getStudentInfo());

//destructing

let {
  email,
  universityInfo: uniInfo,
  universityInfo: { location, profession },
} = student;

console.log(uniInfo);
console.log(email);
console.log(profession);
console.log(location);

// let { profession } = student.universityInfo;

// console.log(profession);

//array destructing
let studentsArr = ["Shabnam", "Guller", "Gulnar", "Salima", "Fidan", "Gulputa"];

let [, , a, b] = studentsArr;

console.log(a, b);

// rest vs spread operators

//rest

// arr destructing
let [first, second, ...rest] = studentsArr;

console.log(rest);

//object destructing

let { firstName, lastName, ...restObj } = student;

console.log(restObj);

function test(a, b, ...rest) {
  console.log(rest);
}

test(1, 2, 3, 4, 5);

//spread

let str = "gwp102";

let strArr = [...str];

console.log(strArr);

let nums = [1, 2, 3, 4, 5];
//copy

let newNums = [...nums];

console.log(newNums);

function sumOfElements(a, b, c) {
  return a + b + c;
}

console.log(sumOfElements(...nums)); //6

console.log(Math.max(...nums)); //5



