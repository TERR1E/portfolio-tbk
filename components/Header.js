window.onscroll = function() { fixedNav() };

let navbar = document.getElementsByClassName('nav');
let sticky = navbar[0].offsetTop;

function fixedNav() {
  if (window.pageYOffset >= sticky) {
    navbar[0].classList.add("sticky");
  } else {
    navbar[0].classList.remove("sticky");
  }
}