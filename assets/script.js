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
let img_path = "/assets/images/slideshow/";
let slider_txt = document.querySelector("#banner p");
let tag_line = slides[0].tagLine;

// Slider's dots
/* Creation of a list of dots */
const div_dots = document.querySelector(".dots");
let dot_list = document.createElement("ul");
div_dots.appendChild(dot_list);
let dot = "";
let dots = dot_list.childNodes;

/* Filling the list */
for (let i = 0; i < slides.length; i++) {
  dot = document.createElement("li");
  dot.id = slides[i].image;
  dot.classList.add("dot");
  dot_list.appendChild(dot);
}

/* Selected dot */
// Slider's arrows
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
let j = 0;
let slide_img = slides[j].image;
dots[j].classList.add("dot_selected");

arrow_left.addEventListener("click", (event) => {
  event.preventDefault();
  j--;
  
  // change selected dot
  if (dots[j].id === slides[j].image) {
    dots[j + 1].classList.remove("dot_selected");
    dots[j].classList.add("dot_selected");
  }

  // change image
  slider_img.src = img_path + slides[j].image;

  // change texte
  // slide_txt = slides[j].tagLine;
  // slider_txt.textContent = slide_txt;
});

arrow_right.addEventListener("click", (event) => {
  event.preventDefault();
  j++;
  
  // change the selected dot
  if (dots[j].id === slides[j].image) {
    dots[j - 1].classList.remove("dot_selected");
    dots[j].classList.add("dot_selected");
  }
  // change the image
  slider_img.src = img_path + slides[j].image;

  // change the text
  // slide_txt = slides[j].tagLine;
  // slider_txt.textContent = slide_txt;
});
