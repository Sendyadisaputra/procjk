//togel
const navbarNav = document.querySelector(".navbar-nav");
//ktika hamburger menu d klik
document.querySelector("#hambureger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar saidbar untuk menghilangkan nav

const hamburger = document.querySelector("#hambureger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
