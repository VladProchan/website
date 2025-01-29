// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
//========================================================================================================================================================
function showTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Додаємо нулі перед одиничними цифрами
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let timeString = hours + ":" + minutes;
  document.getElementById("clock").innerText = timeString;

  // Оновлюємо час кожну хвилину
  setTimeout(showTime, 1000);
}
showTime();
//========================================================================================================================================================

let whitemode = localStorage.getItem("whitemode");
const themeSwitch = document.getElementById("theme-switch");
const themeSwitchSpan = themeSwitch.querySelector("span");
const enableWhitemode = () => {
  document.body.classList.add("whitemode");
  themeSwitchSpan.textContent = "dark";
  localStorage.setItem("whitemode", "active");
};

const disableWhitemode = () => {
  document.body.classList.remove("whitemode");
  themeSwitchSpan.textContent = "white";
  localStorage.setItem("whitemode", null);
};

if (whitemode === "active") enableWhitemode();

themeSwitch.addEventListener("click", () => {
  whitemode = localStorage.getItem("whitemode");
  whitemode !== "active" ? enableWhitemode() : disableWhitemode();
});

//========================================================================================================================================================
// Функція для активації табу
function activateTab(tabId) {
  // Ховаємо всі таби
  document.querySelectorAll('.main__section').forEach(tab => {
    tab.classList.remove('active-tab');
  });

  // Показуємо потрібний таб
  const targetTab = document.getElementById(tabId);
  if (targetTab) {
    targetTab.classList.add('active-tab');
  }

  // Знімаємо клас active з усіх кнопок
  document.querySelectorAll('.navigation__button').forEach(btn => btn.classList.remove('active-tab'));

  // Додаємо клас active на кнопку, пов’язану з табом
  const activeButton = document.querySelector(`.navigation__button[data-target="${tabId}"]`);
  if (activeButton) {
    activeButton.classList.add('active-tab');
  }

  // Зберігаємо вибір у localStorage
  localStorage.setItem('activeTab', tabId);
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  // Отримуємо ID активного табу з localStorage
  const savedTabId = localStorage.getItem('activeTab') || 'tab-1'; // За замовчуванням tab-1
  activateTab(savedTabId);

  // Додаємо обробники подій до кнопок
  document.querySelectorAll('.navigation__button').forEach(button => {
    button.addEventListener('click', () => {
      const targetTabId = button.getAttribute('data-target');
      activateTab(targetTabId);
    });
  });
});
//========================================================================================================================================================
document.querySelector('.menu__about-icon').addEventListener('click', function() {
  var block = document.querySelector('.profile__description');
  var button = document.querySelector('.menu__about-icon');
  block.classList.toggle('active-info');
  button.classList.toggle('active-info');
  document.documentElement.classList.remove("menu-open");
});
document.querySelector('.description-profile__icon-close').addEventListener('click', function() {
  var block = document.querySelector('.profile__description');
  var button = document.querySelector('.menu__about-icon');
  block.classList.toggle('active-info');
  button.classList.toggle('active-info');
});