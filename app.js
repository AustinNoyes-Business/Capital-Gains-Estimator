const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// const button_anim = document.getElementById('main_btn').addEventListener('click', function() {
//   var c = document.getElementsByClassName('checkmark');
//   for (var i = 0; i < c.length; i++) {
//     c[i].classList.add('checkmark__check');
//   }
// })