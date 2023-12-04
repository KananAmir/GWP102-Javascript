//promises

//pending, fullfilled, rejected states

let promise = new Promise((resolve, reject) => {
  let age = 17;

  if (age >= 18) {
    resolve("SUCCESS");
  } else {
    reject("FAILED");
  }
});

// console.log(promise);

//then, catch, finally blocks

// promise
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err))
//   .finally(() => {
//     console.log("finally block");
//   });

// promise
//   .then(
//     (response) => console.log(response),
//     (err) => {
//       console.log(err);
//     }
//   )
//   .finally(() => {
//     console.log("finally block");
//   });

//   promise chaning

let myPromise = new Promise((resolve, reject) => {
  const students = ["Gulnar", "Salima", "Nazrin"];

  //   students.length = 0;
  if (students.length) {
    resolve(students);
  } else {
    reject("failed");
  }
});

myPromise
  .then((res) => {
    res.push("Nigar");
    return res;
  })
  .then((data) => {
    data.length = 2;
    return data;
  })
  .then((a) => {
    console.log(a);
  })
  .catch((err) => console.log(err));
