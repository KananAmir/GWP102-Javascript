let tBody = document.querySelector("tbody");
let total = document.querySelector(".total");
let basketCount = document.querySelector(".basket-count");

let basket = getProductsToLocalSotarge() ?? [];

function drawBasket(data) {
  tBody.innerHTML = "";

  data.forEach((element) => {
    let tr = document.createElement("tr");

    // tr.classList = "";
    tr.innerHTML = `
    <td><img src="${element.product.thumbnail}" /></td>
    <td>${element.product.title}</td>
    <td>${element.product.price} AZN</td>
    <td>${element.product.stock}</td>
    <td class="sub-total">${element.count * element.product.price} AZN</td>
    <td><button onclick=incrementCount(this,"${
      element.product._id
    }")>+</button><span>${
      element.count
    }</span><button onclick=decrementCount(this,"${
      element.product._id
    }")>-</button></td>
    <td><button class="btn btn-danger" onclick=deleteProduct(this,"${
      element.product._id
    }")>Delete</button></td>
  `;

    tBody.append(tr);
  });
}

drawBasket(basket);

function setProductsToLocalSotarge(arr) {
  localStorage.setItem("allProducts", JSON.stringify(arr));
}
function getProductsToLocalSotarge() {
  return JSON.parse(localStorage.getItem("allProducts"));
}

function deleteProduct(btn, id) {
  basket = basket.filter((item) => item.product._id !== id);
  setProductsToLocalSotarge(basket);
  //   console.log(btn);
  //   btn.parentElement.parentElement.remove();
  btn.closest("tr").remove();
  getBasketCount();
  getTotalPrice();
}

function getBasketCount() {
  basketCount.textContent = basket.reduce((acc, curr) => acc + curr.count, 0);
}
function getTotalPrice() {
  let sum = basket.reduce(
    (acc, curr) => acc + curr.count * curr.product.price,
    0
  );
  total.textContent = `${sum} AZN`;
}

function incrementCount(btn, id) {
  let product = basket.find((item) => item.product._id === id);
  product.count = product.count + 1;

  btn.parentElement.querySelector("span").textContent = product.count;

  btn.parentElement.parentElement.querySelector(".sub-total").textContent = `${
    product.count * product.product.price
  } AZN`;

  setProductsToLocalSotarge(basket);
  getTotalPrice();
  getBasketCount();
}
function decrementCount(btn, id) {
  let product = basket.find((item) => item.product._id === id);
  product.count = product.count - 1;

  if (product.count > 0) {
    btn.parentElement.querySelector("span").textContent = product.count;

    btn.parentElement.parentElement.querySelector(
      ".sub-total"
    ).textContent = `${product.count * product.product.price} AZN`;
  } else {
    btn.parentElement.parentElement.remove();

    basket = basket.filter((item) => item.product._id !== id);
  }

  setProductsToLocalSotarge(basket);
  getTotalPrice();
  getBasketCount();
}

getTotalPrice();
getBasketCount();
