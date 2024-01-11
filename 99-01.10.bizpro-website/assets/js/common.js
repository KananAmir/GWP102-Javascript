const BASE_URL = `http://localhost:8080`;
const backToTop = document.querySelector(".back-to-top");
function setFavsToLocaleStorage(favs) {
  localStorage.setItem("favs", JSON.stringify(favs));
}
function getFavsFromLocaleStorage() {
  return JSON.parse(localStorage.getItem("favs")) || [];
}

window.addEventListener("scroll", function () {
  backToTop.classList.toggle("show", window.scrollY > 0);
});
