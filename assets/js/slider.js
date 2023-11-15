const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider__section");

let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function NextSlider() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];

  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 2s cubic-bezier(0.25, 0.35, 0, 1.74)";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);

    slider.style.marginLeft = "-100%";
  }, 500);
}

function PrevSlider() {
  const sliderSection = document.querySelectorAll(".slider__section");

  let sliderSectionLast = sliderSection[sliderSection.length - 1];

  slider.style.marginLeft = "0%";
  slider.style.transition = "all 2s cubic-bezier(0.25, 0.35, 0, 1.74)";

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);

    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener("click", () => {
  NextSlider();
});

btnLeft.addEventListener("click", () => {
  PrevSlider();
});

setInterval(() => {
  NextSlider();
}, 5000);