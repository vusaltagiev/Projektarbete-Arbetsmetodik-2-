/*DECLARATIONS*/
const slideShowContainer = document.querySelector(".slideShow");
const slidesContainer = document.querySelector(".slidesContainer");
const rightBtn = document.querySelector("#slideRight");
const leftBtn = document.querySelector("#slideLeft");
const slideShowInterval = 6000;

let slides = document.querySelectorAll(".slideCard");
let index = 1;
let currentSlide;
let dots;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "firstClone";
lastClone.id = "lastClone";

slidesContainer.append(firstClone);
slidesContainer.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

/*CLONES SLIDER*/
const slideCollection = () => document.querySelectorAll(".slideCard");

slidesContainer.addEventListener("transitionend", () => {
    slides = slideCollection();
    if (slides[index].id === firstClone.id) {
        index = 1;
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform =
            "translateX(" + -slideWidth * index + "px)";
    }
    slides = slideCollection();
    if (slides[index].id === lastClone.id) {
        index = slides.length - 1;
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform =
            "translateX(" + -slideWidth * index + "px)";
    }
});

/*ARROW BTNS*/
const moveRight = () => {
    slides = slideCollection();
    if (index >= slides.length - 1) return;
    index++;
    slidesContainer.style.transition = "transform 0.4s ease-in-out";
    slidesContainer.style.transform =
        "translateX(" + -slideWidth * index + "px)";
    closeDisclosure();
};

const moveLeft = () => {
    slides = slideCollection();
    if (index <= 0) return;
    index--;
    slidesContainer.style.transition = "transform 0.4s ease-in-out";
    slidesContainer.style.transform =
        "translateX(" + -slideWidth * index + "px)";
    closeDisclosure();
};

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

/*DOTS*/

const selectDotsGroup = () => document.querySelector("slideNumberDots");
const slideSelect = () => document.querySelectorAll(".slideDot");

const setCurrentSlide = () => {
    slideDots = slideSelect();
    slideDots[index - 1].classList.add("selectedSlide");
};

setCurrentSlide();

/*AUTO SLIDER*/
const autoplay = () => {
    currentSlide = setInterval(() => {
        moveRight();
        closeDisclosure();
    }, slideShowInterval);
};

slidesContainer.addEventListener("mouseenter", () => {
    clearInterval(currentSlide);
});

slidesContainer.addEventListener("mouseleave", autoplay);

autoplay();


/*OPEN BAG*/
/*
let bagBtn = document.getElementsByClassName("bagBtn");
let bag;
for (bag = 0; bag < bagBtn.length - 0; bag++) {
  bagBtn[bag].addEventListener("click", function() {
    this.nextElementSibling.classList.add("bagVisible");
  });
}
*/
/*CLOSE BAG*/
/*
let closeBtn = document.getElementsByClassName("fa-times");
let close;
for (close = 0; close < closeBtn.length - 0; close++) {
  closeBtn[close].addEventListener("click", function() {
    var bagWondow = document.querySelectorAll(".bagVisible");
    [].forEach.call(closebagWindow, function(el) {
      el.classList.remove("bagVisible");
    });
  });
}
*/
