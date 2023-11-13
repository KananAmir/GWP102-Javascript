// function sumTwoNum(a, b) {
//   //   let sum = a + b;
//   //   return sum;
//   return a + b;
// }

//expresssion

// let sumTwoNum = function (a,b) {
//     return a + b;
// };

//arrow
// let sumTwoNum = (a, b) => {
//   return a + b;
// };

// console.log(sumTwoNum(2, 4));
// console.log(sumTwoNum(7, 3));
// console.log(sumTwoNum(9, 2));

// function sumOfNums() {
//   return arguments;
// }

let sumOfNums = (...args) => {
  return args;
};

// console.log(sumOfNums(2));
// console.log(sumOfNums(2, 5, 6, 7, 3));

/////////////////////////////////////////////////////

let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

let arr2 = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
];
// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

function filterObjs(array) {
  let filteredArr = array.filter(
    (elem, index, arr) => elem.name[0].toLocaleLowerCase() === "t"
  );

  return filteredArr;
}

// console.log(filterObjs(arr));
// console.log(filterObjs(arr2));

// 5) "name"-i en uzun olan obyekti tapin

function findMaxLengthElement(array) {
  let maxLength = array[0].name.length;
  let maxNamedElement;

  array.forEach((item, index, array) => {
    if (item.name.length > maxLength) {
      maxLength = item.name.length;
      maxNamedElement = item;
    }
  });

  return maxNamedElement;
}

// console.log(findMaxLengthElement(arr));

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

let str = "lorem ipsum dolor";

// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));

let filtered = arr.filter(
  (item, index) => item.name.indexOf("t") !== item.name.lastIndexOf("t")
);

// console.log(filtered);

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr[0].name.length; j++) {
    if (arr[i].name[j] === "t") {
      count++;
    }
  }

  count >= 2 && console.log(arr[i].key);
}
