"use strict";

const slides = Array.from(document.querySelectorAll(".slider__item")),
    previousArrow = document.querySelector(".slider__arrow_prev"),
    nextArrow = document.querySelector(".slider__arrow_next"),
    dots = Array.from(document.querySelectorAll(".slider__dot"));

let activeSlide = 0;

function hideSlide() {
    slides[activeSlide].className = "slider__item";
    dots[activeSlide].className = "slider__dot";
};

function activateSlide() {
    slides[activeSlide].className = "slider__item slider__item_active";
    dots[activeSlide].className = "slider__dot slider__dot_active";
};

nextArrow.onclick = () => {
    hideSlide();
        activeSlide++;
        if (activeSlide === slides.length) {
            activeSlide = 0;
        };
    activateSlide();
};

previousArrow.onclick = () => {
    hideSlide();
        activeSlide--;
        if (activeSlide < 0) {
            activeSlide = (slides.length - 1);
        };
    activateSlide();
};

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        hideSlide();
        activeSlide = i;
        activateSlide();
    };
};