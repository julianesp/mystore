// script para presentacion de accesorios, trabajos, accesorios nuevos, etcétera
var counter = 1;

setInterval(function() {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);

//menu lateral en 768px
const header = document.querySelector(".header");
const burgerMenu = document.querySelector("#burger-menu");

burgerMenu.addEventListener("click", hideShow);

function hideShow() {
    if (header.classList.contains("is-active")) {
        header.classList.remove("is-active");
    } else {
        header.classList.add("is-active");
    }
}

//----------------------------------------

var num = 1;

function adelante() {
    num++;
    if (num > 3) {
        num = 1;
        var foto = document.getElementById("foto");
        foto.src = "foto" + num + ".jpg";
    }
}

function atras() {
    num--;
    if (num < 1) {
        num = 3;
        var foto = document.getElementById("foto");
        foto.src = "foto" + num + ".jpg";
    }
}

//----------------------------------------