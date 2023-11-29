// import { products as data} from "./data.js";
import { products, BASE_URL } from "./data.js"; //named import
import getData from "./data.js";

console.log(products);
// console.log(BASE_URL);

//named, default imports/exports

console.log(getData(BASE_URL));
