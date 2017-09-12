/* ----------  SLIDER --------- */

var left = document.querySelector(".arrow-left");
var right = document.querySelector(".arrow-right");
var slides = document.querySelectorAll(".slide");
console.log(slides);
var index = 0;

slides[index].classList.add("visible");

left.addEventListener("click", moveLeft);
function moveLeft(event) {
    console.log("Move left");
    if (index <= 0) {
        slides[index].classList.remove("visible");
        index = slides.length - 1;
        slides[index].classList.add("visible");

    } else if (index <= slides.length - 1) {
        slides[index].classList.remove("visible");
        index = index - 1;
        slides[index].classList.add("visible");
    }
}

right.addEventListener("click", moveRight);
function moveRight(event) {
    console.log("Move right");
    if (index < slides.length - 1) {
        slides[index].classList.remove("visible");
        index = index + 1;
        slides[index].classList.add("visible");

    } else if (index = slides.length - 1) {
        slides[index].classList.remove("visible");
        index = 0;
        slides[index].classList.add("visible");
    }
}

/* ----------  CHECKBOX --------- */

var tick = document.querySelector(".tick");
checkbox.addEventListener("click", function() {
    if (document.querySelector("#checkbox").checked === true) {
        tick.style.visibility = "visible";
    } else {
        tick.style.visibility = "hidden";
    }
})
