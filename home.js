/////// Sticky Navbar On Scroll //////
const header = document.querySelector("header");
const headerLogo = document.querySelector(".logo");

document.addEventListener("scroll", function () {
  header.classList.add("scrolled");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    headerLogo.src = "./img/Layer 5.png";
  } else {
    header.classList.remove("scrolled");
    headerLogo.src = "./img/Layer 7.png";
  }
});
// Slider

let slideIndex = 0;
showSlides();
var ta = setInterval(showSlides, 3000);

function showSlides(ai = 1) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex += ai;
  if (slideIndex == 0) {
    slideIndex = slides.length;
  }
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  console.log(slides)
  console.log(slideIndex)
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}

function prevSlide() {
  showSlides(-1);
  clearInterval(ta);
  ta = setInterval(showSlides, 3000);
}

function nextSlide() {
  showSlides(1);
  clearInterval(ta);
  ta = setInterval(showSlides, 3000);
}


////////////// SOLUTIONS //////////////////

let solution = document.querySelectorAll(".solution");
window.addEventListener("resize", onResized);
function onResized() {
  if (window.innerWidth > 767) {
    for (let i = 0; i <= solution.length; i++) {
      if (i % 2 == 0) {
        solution[i].setAttribute("data-aos", "fade-left");
      } else {
        solution[i].setAttribute("data-aos", "fade-right");
      }
    }
  } else {
    for (let j = 0; j < solution.length; j++) {
      solution[j].setAttribute("data-aos", "fade-up");
    }
  }
}
onResized();
