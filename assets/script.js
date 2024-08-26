// Slider's images
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let img_slider = document.querySelector(".banner-img");
let img = slides[0].image;
let slide_img = getSlideSrcValue(img);

function getSlideSrcValue(img) {
  let slide_img = img.split(".");
  return slide_img[0];
}

// Slider's dots
/* Creation of a list of dots */
const div_dots = document.querySelector(".dots");
let dotList = document.createElement("ul");
div_dots.appendChild(dotList);
let dot = "";
let dots = dotList.childNodes;

/* Filling the list */
for (let i = 0; i < slides.length; i++) {
  dot = document.createElement("li");
  dot.id = `slide${i + 1}`;
  dot.classList.add("dot");
  dotList.appendChild(dot);
}

/* Selected dot */
// Slider's arrows
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
let j = 0;
dots[j].classList.add("dot_selected");

arrow_left.addEventListener("click", (event) => {
  event.preventDefault();
  j--;
  slide_img = slides[j].image;
  let slide_img_id = getSlideSrcValue(slide_img);
  if (dots[j].id === slide_img_id) {
    dots[j + 1].classList.remove("dot_selected");
    dots[j].classList.toggle("dot_selected");
  }
  let sliced_img = img_slider.src.slice(0, 46);
  img = sliced_img + slide_img;
  img_slider.src = img;
});

arrow_right.addEventListener("click", (event) => {
  event.preventDefault();
  j++;
  slide_img = slides[j].image;
  let slide_img_id = getSlideSrcValue(slide_img);
  if (dots[j].id === slide_img_id) {
    dots[j - 1].classList.remove("dot_selected");
    dots[j].classList.toggle("dot_selected");
  }
  let sliced_img = img_slider.src.slice(0, 46);
  img = sliced_img + slide_img;
  img_slider.src = img;
});
