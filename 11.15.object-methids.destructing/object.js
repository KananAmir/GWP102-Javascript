//object litheral

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
  getMyInfo: function (age) {
    return `I am ${this.firstName} ${this.lastName}. I am ${age}`;
  },
  // getFullName() {
  //   return `I am ${this.firstName} ${this.lastName}`;
  // },
  // getFullName: () => {
  //   return `I am ${this.firstName} ${this.lastName}`;
  // },

  showPersonSkils: function () {
    return `I know ${this.skills.toString()}`;
  },
};

console.log(this);
// console.log(person.getFullName());
console.log(person.getMyInfo(44));
console.log(person.showPersonSkils());

// person.phone = 11223344;
// person["phone number"] = 11223344;
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person);

// let newPerson = person; //shallow copy
// let newPerson = { ...person }; // deep copy

// let newPerson = structuredClone(person); //deep copy
// newPerson.country = "Norwey";
// newPerson.skills.pop();
// console.log(person);
// console.log(newPerson);

//constructor
// let obj = new Object();

// obj.name = "Lorem Ipsum";
// obj.email = "Lorem@gmail.com";

// console.log(obj);

//object methods

//assign

let user = {
  firstName: "Jhon",
  lastName: "Doe",
  email: "jhon@gamil.com",
  city: "Ganja",
  skills: ["a", "b"],
};

let a = {
  userName: "jhon_doe",
};
// let newUser = Object.assign({}, user);
// let newUser = Object.assign(
//   {
//     userName: "jhon_doe",
//   },
//   user
// );

// let newUser = Object.assign(a, user);

// console.log(newUser);

// keys

// console.log(Object.keys(person));

// values

// console.log(Object.values(person));

//entries

// console.log(Object.entries(user));

//hasOwnProperty

// console.log(user.hasOwnProperty("email")); // true
// console.log(user.hasOwnProperty("firstName")); //true
// console.log(user.hasOwnProperty("age")); //false
// console.log(user.hasOwnProperty("fullName")); //false
