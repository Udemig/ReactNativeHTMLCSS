//console.log('selam')
const header = document.querySelector("header");
//console.log(header)

const menuBtn = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 60);
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("bx-x");
  navbar.classList.toggle("open");
});

