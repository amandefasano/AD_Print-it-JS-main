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
let slider_img = document.querySelector(".banner-img");
let img_path = "./assets/images/slideshow/";
let slider_txt = document.querySelector("#banner p");

// Slider's dots
/* Creation of a list of dots */
let dots_list = document.querySelector(".dots_list");

/* Filling the list */
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("li");
  dot.id = slides[i].image;
  dot.classList.add("dot");
  dots_list.appendChild(dot);
}

/* Selected dot */
// Slider's arrows
let j = 0;
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");

// First dot selected
let dots = dots_list.childNodes;
dots[j].classList.add("dot_selected");

/* Event listener on left arrow */
arrow_left.addEventListener("click", () => {
  j--;
  dots[j + 1].classList.remove("dot_selected");

  // Loop condition
  if (j < 0) {
    j = slides.length - 1;
  }

  // change the selected dot
  dots[j].classList.add("dot_selected");

  // change image
  slider_img.src = img_path + slides[j].image;

  // change texte
  slider_txt.innerHTML = slides[j].tagLine;
});

/* Event listener on right arrow */
arrow_right.addEventListener("click", () => {
  j++;
  dots[j - 1].classList.remove("dot_selected");

  // Loop condition
  if (j >= slides.length) {
    j = 0;
  }

  // change the selected dot
  dots[j].classList.add("dot_selected");

  // change the image
  slider_img.src = img_path + slides[j].image;

  // change the text
  slider_txt.innerHTML = slides[j].tagLine;
});
