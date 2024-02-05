const slide1 = ["img/MH1.jpg", "img/MH2.jpg", "img/MH3.jpg", "img/MH4.jpg", "img/MH5.jpg", "img/MH6.jpg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide1.length - 1;
    if (numero > slide1.length - 1)
        numero = 0;
    document.getElementById("slide1").src = slide1[numero];
}

setInterval("ChangeSlide(1)", 4000);