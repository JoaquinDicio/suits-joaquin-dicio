function main() {
  setHeader();
}

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
