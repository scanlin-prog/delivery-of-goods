const overlay = document.querySelector(".overlay");
const headerMenu = document.querySelector(".header__menu");
const headerButtonMenu = document.querySelector(".header__button-menu");
const headerButtonCloseMenu = document.querySelector(
  ".header__button-close-menu"
);
const tables = document.querySelectorAll(".table");

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
  headerButtonCloseMenu.classList.remove(
    "header__button-close-menu_visibility"
  );
}

function openTable(table) {
  table
    .querySelector(".table__body")
    .classList.toggle("table__body_visibility");
  table
    .querySelector(".table__button")
    .classList.toggle("table__button_rotated");
}

headerButtonMenu.addEventListener("click", openHeaderMenu);
headerButtonCloseMenu.addEventListener("click", closeHeaderMenu);

tables.forEach((table) => {
  const tableHeader = table.querySelector(".table__header");
  tableHeader.addEventListener("click", () => {
    openTable(table);
  });
});
