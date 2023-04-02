'use strict';


// add event listener on multiple elements 

const addEventOnElements = function (elements,eventType,calback){
    for (let i = 0, len = elements.length; i < len; i++){
    elements[i].addEventListener(eventType, calback);
    }
}

// mobile navbar toggler 
const navbabr = document.querySelector("[data-navbar");
const navTogglers = document.querySelector("[data-nav-toggler]");

const toggleNav = () => navbabr.classList.toggler("active");
addEventOnElements(navTogglers, "click", toggleNav);

// * header Animation
// * when scrolled down to 100px header will be active 
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// slider
const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next");

let totalsSliderVisibleItems = Number(getComputerStyle(slider).getPropertyValue
("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalsSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].
    offsetLeft}px)`;
    }

    // next slide 
const slideNext = fucntion () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

if (slideEnd) {
    currentSlidePos = 0;
}else {
    currentSlidePos++;
}
moveSliderItem();
}
sliderNextBtn.addEventListener("click", slideNext); 

// previous slide 
const slidePrev = fucntion () {
if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
} else {
    currentSlidePos--;
}
moveSliderItems();
}
sliderPrevBtn.addEventListener("click", slidePrev);

// responsive 
window.addEventListener("resize", function (){
totalsSliderVisibleItems = Number(getComputerStyle(slider).getPropertyValue
("--slider-items"));
totalSlidableItems = sliderContainer.childElementCount - totalsSliderVisibleItems;

 moveSliderItems();
});
