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

//slide de presentación de anuncios
var indi = 0;

// $(".page li").eq(indi).css("background-color", "#419CCA");

// $(".page li").click(function() {
//     indi = $(this).index();
//     $(".page li").css("background-color", "#bababa");
//     $(this).css("background-color", "#419CCA");
//     $(".preacce").hide();
//     $(".preacce").eq(indi).fadeIn();
// });

// $(".dere").click(function() {
//     indi++;
//     if (indi > 2) {
//         indi = 0;
//     }
//     $(".preacce").hide();
//     $(".preacce").eq(indi).fadeIn();
//     $(".page li").css("background-color", "#bababa");
//     $(".page li").eq(indi).css("background-color", "#419CCA");
// });
// $(".iz").click(function() {
//     indi--;
//     if (indi < 0) {
//         indi = 1;
//     }
//     $(".preacce").hide();
//     $(".preacce").eq(indi).fadeIn();
//     $(".page li").css("background-color", "#bababa");
//     $(".page li").eq(indi).css("background-color", "#419CCA");
// });

// setInterval(() => {
//     indi++;
//     // condicional para volver a la imagen 0
//     if (indi > 2) {
//         indi = 0;
//     }
//     $(".preacce").hide();
//     $(".preacce").eq(indi).fadeIn();
//     $(".page li").css("background-color", "#bababa");
//     $(".page li").eq(indi).css("background-color", "#419CCA");
// }, 1000);

// $(".dere").click(function() {
//     indi++;
//     if (indi > 2) {
//         indi = 0;
//     }
//     $(".preacce").hide();
//     $(".preacce").eq(indi).fadeIn();
//     $(".page li").css("background-color", "#bababa");
//     $(".page li").eq(indi).css("background-color", "#419CCA");
// });

// $(".iz").click(function() {
//     indi--;

//     if (indi < 0) {
//         indi = 2;
//     }
//     $(".preacce").hide();
//     $(".preacce").eq(indi).fadeIn();
//     $(".page li").css("background-color", "yellow");
//     $(".page li").eq(indi).css("background-color", "orange");
// });

// slide automatico para programas
var indice = 0;

// $(".paginacion li").eq(indice).css("background-color", "orange");

// $(".paginacion li").click(function() {
//     indice = $(this).index();
//     $(".paginacion li").css("background-color", "yellow");
//     $(this).css("background-color", "orange");
//     $(".programas-varios").hide();
//     $(".programas-varios").eq(indice).fadeIn();
// });

// // para que las imagenes se pasen automaticamente
// setInterval(() => {
//     indice++;
//     // condicional para volver a la imagen 0
//     if (indice > 2) {
//         indice = 0;
//     }
//     $(".programas-varios").hide();
//     $(".programas-varios").eq(indice).fadeIn();
//     $(".paginacion li").css("background-color", "yellow");
//     $(".paginacion li").eq(indice).css("background-color", "orange");
// }, 4000);

// $(".derecha").click(function() {
//     indice++;
//     // condicional para volver a la imagen 0
//     if (indice > 2) {
//         indice = 0;
//     }
//     $(".programas-varios").hide();
//     $(".programas-varios").eq(indice).fadeIn();
//     $(".paginacion li").css("background-color", "yellow");
//     $(".paginacion li").eq(indice).css("background-color", "orange");
// });
// $(".izquierda").click(function() {
//     indice--;
//     // condicional para volver a la imagen 0
//     if (indice < 0) {
//         indice = 2;
//     }
//     $(".programas-varios").hide();
//     $(".programas-varios").eq(indice).fadeIn();
//     $(".paginacion li").css("background-color", "yellow");
//     $(".paginacion li").eq(indice).css("background-color", "orange");
// });