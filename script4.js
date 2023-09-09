let photo1 = document.getElementById("image1");
let photo2 = document.getElementById("image2");
let photo3 = document.getElementById("image3");
let photo4 = document.getElementById("image4");
let photo5 = document.getElementById("image5");
let photo6 = document.getElementById("image6");


window.addEventListener('scroll',() => {
    let value = window.scrollY;

    photo1.style.top = value * (-3) +'px';
    photo2.style.top = value * (-3) +'px';
    photo3.style.top = value * (-3) +'px';
    photo4.style.top = value * (-3) +'px';
    photo5.style.top = value * (-3) +'px';
    photo6.style.top = value * (-3) +'px';
   
});