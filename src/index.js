import { loadContact } from "./contact.js";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import "./styles.css";

function clearContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((button) => button.classList.remove("active"));
  activeButton.classList.add("active");
}

function setupNavigation() {
  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const contactBtn = document.querySelector("#contact-btn");

  homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
    setActiveButton(homeBtn);
  });

  menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
    setActiveButton(menuBtn);
  });

  contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
    setActiveButton(contactBtn);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadHome();
  setupNavigation();
});
