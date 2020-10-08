const add = document.querySelector('.add');
const list = document.querySelector('.card_list');
const card = document.querySelector('.card');
const add2 = document.querySelector('.add2');
const list2 = document.querySelector('.card_list2');
const add3 = document.querySelector('.add3');
const list3 = document.querySelector('.card_list3');
const add4 = document.querySelector('.add4');
const list4 = document.querySelector('.card_list4');
const add5 = document.querySelector('.add5');
const list5 = document.querySelector('.card_list5');

const t3 = new TimelineMax();


var currentOpacity = 1;



add.addEventListener("click", () => {



    add.classList.toggle("change");
    list.classList.toggle("grow");
    card.classList.toggle("scroll");


});
add2.addEventListener("click", () => {



    add2.classList.toggle("change");
    list2.classList.toggle("grow2");
    card.classList.toggle("scroll");


});
add3.addEventListener("click", () => {



    add3.classList.toggle("change");
    list3.classList.toggle("grow3");
    card.classList.toggle("scroll");


});
add4.addEventListener("click", () => {



    add4.classList.toggle("change");
    list4.classList.toggle("grow4");
    card.classList.toggle("scroll");


});
add5.addEventListener("click", () => {



    add5.classList.toggle("change");
    list5.classList.toggle("grow5");
    card.classList.toggle("scroll");


});


