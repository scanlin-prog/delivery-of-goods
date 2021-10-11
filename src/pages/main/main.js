const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header__menu");
const headerButtonMenu = document.querySelector(".header__button-menu");
const headerButtonCloseMenu = document.querySelector(".header__button-close-menu");

function openHeaderMenu() {
  overlay.classList.add("overlay_visibility");
  headerMenu.classList.add("header__menu_visibility");
  headerButtonMenu.classList.add("header__button-menu_hidden");
  headerButtonCloseMenu.classList.add("header__button-close-menu_visibility");
}

function closeHeaderMenu() {
  overlay.classList.remove("overlay_visibility");
  headerMenu.classList.remove("header__menu_visibility");
  headerButtonMenu.classList.remove("header__button-menu_hidden");
  headerButtonCloseMenu.classList.remove("header__button-close-menu_visibility");
}

headerButtonMenu.addEventListener("click", openHeaderMenu);
headerButtonCloseMenu.addEventListener("click", closeHeaderMenu);
