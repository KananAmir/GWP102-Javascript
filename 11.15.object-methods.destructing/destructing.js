// array destructing
const webTechs = [
  "HTML",
  "React",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "React",
  "MongDB",
];

// let h = webTechs[0];
// let r = webTechs[1];
// let c = webTechs[2];

// [h, r, c] = webTechs;
// [, , , , , h, r, c] = webTechs;

let [h, r, c, ...rest] = webTechs;

console.log(h, r, c);
console.log(rest);

//swapping
// let a = 5;
// let b = 3;

// [a, b] = [b, a];

//object destructing

const person = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 250,
  country: "Azerbaijan",
  city: "Ganja",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
};

// let personSkills = person.skills;
// let country = person.country;

let { country, skills, city: sheher } = person;

// console.log(personSkills);
console.log(country);
console.log(sheher);
