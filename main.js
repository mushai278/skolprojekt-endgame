const mainNav = document.querySelector('#js-menu');
const navBarToggle = document.querySelector('#js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
const btn = document.querySelector("#toggle-theme");
console.log(btn);
btn.addEventListener("click", myFunction);

const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
