const slideIt = function () {
  const nav = document.querySelector(".nav-links");
  const ham = document.querySelector(".burger");

  ham.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
  });
};

slideIt();
console.log("heheheh");
