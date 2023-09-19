function main() {
  setHeader();
  setSlider();
}

//header and menu
function setHeader() {
  setHeaderScrollEffect();
  setHeaderResponsive();
}

function setHeaderScrollEffect() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", (e) => {
    if (window.scrollY < 135) {
      header.classList.remove("nav-scrolling");
    } else {
      header.classList.add("nav-scrolling");
    }
  });
}

function setHeaderResponsive() {
  const btnMenu = document.querySelector("#btn-menu");
  btnMenu.addEventListener("click", toggleShowMenu);
}

function toggleShowMenu() {
  const nav = document.querySelector(".nav-responsive");
  nav.classList.toggle("d-block");
}

//slider
let sliderIdx = 0;

function setSlider() {
  const next = document.querySelector("#next");
  const back = document.querySelector("#back");
  next.addEventListener("click", sliderNext);
  back.addEventListener("click", sliderPrev);
}

function sliderNext() {
  const cantImgs = document.querySelectorAll(".reparto-card").length;
  if (sliderIdx !== cantImgs - 1) sliderIdx++;
  moveSlider();
}

function moveSlider() {
  const slider = document.querySelector("#slider");
  slider.style.transform = `translateX(-${sliderIdx * 340}px)`;
}

function sliderPrev() {
  if (sliderIdx !== 0) sliderIdx--;
  moveSlider();
}
