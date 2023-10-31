//teplate litherals/strings
let firstName = "Kanan";
let lastName = "Amirov";

console.log(firstName + "-" + lastName);

console.log(`${firstName}-${lastName}`);

//Conditinals
//if else
let number = -56;

// if (number >= 0) {
//   console.log(`${number} is bigger than or equal to 0`);
// } else {
//   console.log(`${number} is negative`);
// }

if (number > 0) {
  console.log(`${number} is positive number`);
} else if (number < 0) {
  console.log(`${number} is negative number`);
} else {
  console.log(`${number} is equal to 0`);
}

// let userAge = 25;
// let city = "Ganja";
// if (userAge >= 18 && city !== "Ganja") {
//   console.log("Wellcome to hell!");
// } else {
//   console.log("You are smaller then..");
// }

let userAge = 25;
let city = "Ganja";

if (userAge >= 18) {
  if (city === "london") {
    console.log("Wellcome to hell!");
  } else {
    console.log("Age is okay but city is not okay");
  }
} else {
  console.log("u are smaller");
}

//switch case

let weekDay = 20;

switch (weekDay) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
//   case 15:
//   case 50:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
  case 20:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    console.log("There is no such week day");
    break;
}
