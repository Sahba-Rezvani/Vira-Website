

/////// HAMBURGER //////

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const headerBackground = document.querySelector("header");
const logoType = document.querySelector(".logoType");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("activate");
  menu.classList.toggle("activate");
  headerBackground.classList.toggle("header_bg");
});

document.querySelectorAll(".menu_item-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("activate");
    menu.classList.remove("activate");
  })
);
