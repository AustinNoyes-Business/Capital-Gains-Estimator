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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}