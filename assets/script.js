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
let src_value = img_slider.getAttribute("src");
let slide_src_value = getSlideSrcValue(src_value);

function getSlideSrcValue(src_value) {
  let split_value = src_value.split("/");
  let slide_src_value = split_value[4].split(".");
  return slide_src_value[0];
}

function increaseSlideSrcValue(slide_src_value) {
  let slide_src_value_index = slide_src_value.charAt(5);
  slide_src_value_index = parseInt(slide_src_value_index);
  slide_src_value_index++;
  slide_src_value = slide_src_value.slice(0, 5);
  let new_slide_src_value = `${slide_src_value}` + `${slide_src_value_index}`;
  return new_slide_src_value;
}

function decreaseSlideSrcValue(slide_src_value) {
  let slide_src_value_index = slide_src_value.charAt(5);
  slide_src_value_index = parseInt(slide_src_value_index);
  slide_src_value_index--;
  slide_src_value = slide_src_value.slice(0, 5);
  let new_slide_src_value = `${slide_src_value}` + `${slide_src_value_index}`;
  return new_slide_src_value;
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

arrow_left.addEventListener("click", (event) => {
  event.preventDefault();
  slide_src_value = decreaseSlideSrcValue(slide_src_value);
  for (let j = dots.length -1; j >= 0 ; j--) {
    if (dots[j].id === slide_src_value) {
      console.log(
        `dots[j].id = ${dots[j].id} ET slide_src_value = ${slide_src_value}`
      );
      dots[j+1].classList.remove("dot_selected");
      dots[j].classList.toggle("dot_selected");
    }
  }
  let sliced_src_value = src_value.slice(0, 26)
  src_value = `${sliced_src_value}` + `${slide_src_value}` + `.jpg`
  img_slider.src = src_value
});

arrow_right.addEventListener("click", (event) => {
  event.preventDefault();
  slide_src_value = increaseSlideSrcValue(slide_src_value);
  for (let j = 0; j < dots.length; j++) {
    if (dots[j].id === slide_src_value) {
      console.log(
        `dots[j].id = ${dots[j].id} ET slide_src_value = ${slide_src_value}`
      );
      dots[j-1].classList.remove("dot_selected");
      dots[j].classList.toggle("dot_selected");
    }
  }
  let sliced_src_value = src_value.slice(0, 26)
  src_value = `${sliced_src_value}` + `${slide_src_value}` + `.jpg`
  img_slider.src = src_value
});
