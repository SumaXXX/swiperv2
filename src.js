const readMore = document.querySelector(".button-read-more");
const brandsLength = document.querySelectorAll(".brands__brand").length;
let brands = 6;
let clicked = false;
const arr = Array.from(document.querySelector(".swiper-wrapper").children);

readMore.addEventListener("click", () => {
  if (!clicked) {
    brands += 4;
    const visBrands = arr.slice(0, brands);
    visBrands.forEach((el) => el.classList.add("visibale"));
    readMore.textContent = "Скрыть";
    clicked = true;
  } else {
    const visBrands = arr.slice(0, brands);
    visBrands.forEach((el) => el.classList.remove("visibale"));
    readMore.textContent = "Показать все";
    clicked = false;
  }
});

document.querySelectorAll('.swiper-slide').forEach(el => el.classList.add("interactive--pointer"))