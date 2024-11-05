//togel untuk hambur ger menu
const navbarNav = document.querySelector(".navbar-nav");
//ktika hamburger menu d klik
document.querySelector("#hambureger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toggl class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-bottom").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//toggl class active untukl shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-card-bottom").onclick = () => {
  shoppingCart.classList.toggle("active");
};

// klik diluar elemen

const hm = document.querySelector("#hambureger-menu");
const sb = document.querySelector("#search-bottom");
const sc = document.querySelector("#shopping-card-bottom");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemModalDetail = document.querySelector("#item-modal-detail");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemModalDetail.style.display = "flex";
    e.preventDefault();
  };
});

//click tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemModalDetail.style.display = "none";
  e.preventDefault();
};

//klik diluar modal
window.onclick = (e) => {
  if (e.target === itemModalDetail) {
    itemModalDetail.style.display = "none";
  }
};
