const slideIt = function () {
  const nav = document.querySelector(".nav-links");
  const ham = document.querySelector(".burger");

  ham.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
  });
};

slideIt();

// SKILLS SIVUN JAVAT
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const kuvat = document.querySelectorAll(".mySlides");
const image = document.querySelector("img");
const overlay = document.querySelector(".back");

for (let i = 0; i < kuvat.length; i++) {
  kuvat[i].addEventListener("click", function () {
    const image = document.querySelectorAll("img");
    const container = document.querySelector(".slideshow-container");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    for (let x = 0; x < image.length; x++) {
      container.classList.toggle("siirra-container");
      next.classList.toggle("hidden2");
      prev.classList.toggle("hidden2");

      image[x].classList.toggle("suurenna");
      overlay.classList.toggle("hidden");
    }
  });
}
