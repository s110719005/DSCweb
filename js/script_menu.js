const hamburger = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

const t2 = new TimelineMax();


var currentOpacity = 1;

hamburger.addEventListener("click", () => {



hamburger.classList.toggle("change");
navbar.classList.toggle("show");

});


