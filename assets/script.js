// Slider's images and taglines
const slides = [
  {
    image: "slide1.webp",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.webp",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.webp",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.webp",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
let slider_img_element = document.querySelector(".banner-img");
let img_path = "./assets/images/slideshow/";
let slider_txt_element = document.querySelector("#banner p");

// Slider's dots
let dots_list_element = document.querySelector(".dots_list");
/* Filling the list of dots */
for (let i = 0; i < slides.length; i++) {
  let dot_element = document.createElement("li");
  dot_element.classList.add("dot");
  dots_list_element.appendChild(dot_element);
}
let dots_element = dots_list_element.childNodes;

// Slider's arrows
const arrow_left_element = document.querySelector(".arrow_left");
const arrow_right_element = document.querySelector(".arrow_right");

/**
 
 * Builds the slider by changing the selected dot, the image and the text.
 
 * @param {number} index - The index that is used to determine the upcoming slide.

 * @returns {number} - The index that may have been changed.
 
 */
function buildSlider(index) {
  // Loop condition
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  // change the selected dot
  dots_element[index].classList.add("dot_selected");

  // change image
  slider_img_element.src = img_path + slides[index].image;

  // change texte
  slider_txt_element.innerHTML = slides[index].tagLine;

  return index;
}

// Initialization
let slider_index = 0;
// First dot selected
dots_element[slider_index].classList.add("dot_selected");

/* Event listener on left arrow */
arrow_left_element.addEventListener("click", () => {
  dots_element[slider_index].classList.remove("dot_selected");
  slider_index--;
  slider_index = buildSlider(slider_index);
});

/* Event listener on right arrow */
arrow_right_element.addEventListener("click", () => {
  dots_element[slider_index].classList.remove("dot_selected");
  slider_index++
  slider_index = buildSlider(slider_index);
});
