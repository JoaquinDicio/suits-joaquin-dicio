function main() {
  //mainly for responsive menu
  setHeader();
  //sets 'ver trailer' events and butons
  setTrailer();
  //sets the slider and it's buttons
  setSlider();
  //sets 'ver video' action and events
  setBoda();
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
//frame youtube close btn
//for trailer
function setTrailer() {
  const showBtn = document.querySelector("#trailer-btn");
  const closeBtn = document.querySelector("#close-trailer");
  showBtn.addEventListener("click", toggleTrailer);
  closeBtn.addEventListener("click", toggleTrailer);
}

function toggleTrailer() {
  const iframe = document.querySelector("#trailer-frame");
  iframe.classList.toggle("d-none");
}
//for 'ver video'
function setBoda() {
  const showBtn = document.querySelector("#boda-btn");
  const closeBtn = document.querySelector("#close-boda");
  showBtn.addEventListener("click", toggleBoda);
  closeBtn.addEventListener("click", toggleBoda);
}

function toggleBoda() {
  const iframe = document.querySelector("#boda-frame");
  iframe.classList.toggle("d-none");
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
