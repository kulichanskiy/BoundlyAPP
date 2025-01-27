import { switchTab } from "./tab_switch.js";

const homeTabBtn = document.getElementById(".home-tab-btn");
const likesTabBtn = document.getElementById(".likes-tab-btn");
const eventsTabBtn = document.getElementById(".events-tab-btn");
const newsTabBtn = document.getElementById(".news-tab-btn");
const profileTabBtn = document.getElementById(".profile-tab-btn");

const footerButtons = document.querySelectorAll('.footer-button');
const tabs = document.querySelectorAll('.card-page');

footerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Переключаемся на вкладку по индексу
        switchTab(index);
        // Обновляем активное состояние кнопок
        footerButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});