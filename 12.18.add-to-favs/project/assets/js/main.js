const BASE_URL = `http://localhost:8080`;
const products = document.querySelector(".products");
const favCount = document.querySelector(".fav-count");
const loadMore = document.querySelector(".load-more button");

let productdCopy = [];
let limit = 3;
favCount.style.color = "red";
favCount.style.fontSize = "1.2rem";
let favorites = getFavoritesFromLocaleStorages();
calculateFavCount(favorites.length);

async function getProducts() {
  const response = await axios(`${BASE_URL}/products`);
  //   console.log(response.data);
  productdCopy = response.data;
  drawCards(response.data.slice(0, limit));
}

getProducts();

function drawCards(data) {
  products.innerHTML = "";

  data.forEach((element) => {
    const productCardElement = document.createElement("div");
    productCardElement.className = "card";
    const productTitleDivElement = document.createElement("div");
    productTitleDivElement.className = "title-cont";

    const productTitleElement = document.createElement("h3");
    productTitleElement.textContent = element.title;
    const favIconElement = document.createElement("i");

    const bool = favorites.find((item) => item.id === element.id);

    favIconElement.className = !bool
      ? "fa-regular fa-heart"
      : "fa-solid fa-heart";

    const productPriceElement = document.createElement("span");
    productPriceElement.textContent = element.price;

    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = element.description;
    const productImageElement = document.createElement("img");
    productImageElement.src = element.imageUrl;

    favIconElement.addEventListener("click", function () {
      this.className === "fa-regular fa-heart"
        ? (this.className = "fa-solid fa-heart")
        : (this.className = "fa-regular fa-heart");

      console.log(element);

      let favoriteProducts = getFavoritesFromLocaleStorages();

      const favIndex = favoriteProducts.findIndex(
        (item) => item.id === element.id
      );

      if (favIndex === -1) {
        favoriteProducts.push(element);
      } else {
        favoriteProducts.splice(favIndex, 1);
      }

      setProductToLocaleStorage(favoriteProducts);
      calculateFavCount(favoriteProducts.length);
    });

    productTitleDivElement.append(productTitleElement, favIconElement);
    productCardElement.append(
      productTitleDivElement,
      productPriceElement,
      productDescriptionElement,
      productImageElement
    );

    products.append(productCardElement);
  });
}

function setProductToLocaleStorage(products) {
  localStorage.setItem("favs", JSON.stringify(products));
}

function getFavoritesFromLocaleStorages() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}

function calculateFavCount(count) {
  favCount.textContent = count;
}

// loadMore.addEventListener("click", function () {
//   limit += 3;
//   getProducts();
// });

loadMore.addEventListener("click", function () {
  limit += 3;
  drawCards(productdCopy.slice(0, limit));

  if (limit >= productdCopy.length) {
    this.remove();
  }
});
