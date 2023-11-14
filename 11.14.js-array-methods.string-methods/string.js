let sampleText = `lorem ipsum`;

//length
console.log(sampleText.length); //11

//charAt
console.log(sampleText.charAt(3)); // e

//charCodeAt

console.log(sampleText.charCodeAt(3)); //101

//uppercase/lovercase

console.log(sampleText.toLocaleLowerCase());
console.log(sampleText.toLocaleUpperCase());

//indexOf
console.log(sampleText.indexOf("m")); //4
console.log(sampleText.indexOf("m", 5)); //10

// lastIndexOf
console.log(sampleText.lastIndexOf("m")); //10

// startsWith
console.log(sampleText.startsWith("m")); //false
console.log(sampleText.startsWith("l")); //true
console.log(sampleText.startsWith("lrm")); //false
console.log(sampleText.startsWith("lorem")); //true

//trim

console.log("     hello world    ".trim());
console.log("     hello world    ".trimStart());
console.log("     hello world    ".trimEnd());

//substring

console.log(sampleText.substring(3));
console.log(sampleText.substring(3, 7));

//slice
console.log(sampleText.slice(3));
console.log(sampleText.slice(3, 7));

console.log(sampleText.slice(-3));

// padStart/padEnd

console.log(sampleText.padStart(20, "#"));
console.log(sampleText.padEnd(20, "#"));

//includes

console.log(sampleText.includes("salam")); //false
console.log(sampleText.includes("s")); //true
console.log(sampleText.includes("lor")); //true
console.log(sampleText.includes("l")); //true

//split

// let arr = sampleText.split();
// let arr = sampleText.split("");
let arr = sampleText.split(" ");

console.log(arr);

//replace

// let newSample = sampleText.replace("lorem", "hello");
// let newSample = sampleText.replace("l", "b");

// console.log(newSample);

//replaceAll
let newSample = sampleText.replaceAll("m", "b");

console.log(newSample);

let str = "123salAm 456hEllo";

//regex

// console.log(str.replace(/[1-9]/g, ""));
console.log(str.replace(/[a-z]/gi, ""));

//concat

let firstName = "Kanan";
let lastName = "Amirov";
// let fullName = firstName.concat(lastName);
// let fullName = firstName.concat(" ", lastName);

// let fullName = `${firstName} ${lastName}`;
let fullName = firstName + " " + lastName;
console.log(fullName);

//match

console.log(str.match(/[a-z]/g));
console.log(str.match(/[a-z]/gi));
console.log(str.match(/[1-9]/g));
