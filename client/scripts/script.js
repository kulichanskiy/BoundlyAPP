import { switchTab } from "./tab_switch.js";

const homeTabBtn = document.getElementById(".home-tab-btn");
const likesTabBtn = document.getElementById(".likes-tab-btn");
const eventsTabBtn = document.getElementById(".events-tab-btn");
const newsTabBtn = document.getElementById(".news-tab-btn");
const profileTabBtn = document.getElementById(".profile-tab-btn");

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".footer-button");
    const slider = document.querySelector(".footer-slider");

    buttons.forEach((button, index) => {
        const moveSlider = () => {
            slider.style.left = `${index * 20}%`;
        };

        // Добавляем обработчики для мыши и сенсора
        button.addEventListener("mouseenter", moveSlider);
        button.addEventListener("touchstart", moveSlider);
    });
});