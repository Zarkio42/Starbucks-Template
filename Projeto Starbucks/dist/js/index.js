"use strict";
const imgStarbucks = document.getElementById("starbucks");
const miniaturaRosa = document.getElementById("minRosa");
const miniaturaVerde = document.getElementById("minVerde");
const miniaturaLaranja = document.getElementById("minLaranja");
const circulo = document.getElementById("circulo");
miniaturaRosa === null || miniaturaRosa === void 0 ? void 0 : miniaturaRosa.addEventListener("click", () => {
    let page = document.body;
    if (circulo) {
        if (page.className.includes("dark")) {
            circulo.style.backgroundColor = "#781b5c";
            imgStarbucks.src = "./images/img3.png";
        }
        else {
            imgStarbucks.src = "./images/img3.png";
            circulo.style.backgroundColor = "#bf3899";
        }
    }
});
miniaturaLaranja === null || miniaturaLaranja === void 0 ? void 0 : miniaturaLaranja.addEventListener("click", () => {
    let page = document.body;
    if (circulo) {
        if (page.className.includes("dark")) {
            imgStarbucks.src = "./images/img2.png";
            circulo.style.backgroundColor = "#b05e64";
        }
        else {
            imgStarbucks.src = "./images/img2.png";
            circulo.style.backgroundColor = "#e9acb5";
        }
        console.log("entrei");
    }
});
miniaturaVerde === null || miniaturaVerde === void 0 ? void 0 : miniaturaVerde.addEventListener("click", () => {
    let page = document.body;
    if (circulo) {
        if (page.className.includes("dark")) {
            circulo.style.backgroundColor = "#01653c";
            imgStarbucks.src = "./images/img1.png";
        }
        else {
            imgStarbucks.src = "./images/img1.png";
            circulo.style.backgroundColor = "#017143";
        }
    }
});
function DarkMode() {
    let iconLight = document.getElementById("iconLight");
    let page = document.body;
    if (!(iconLight === null || iconLight === void 0 ? void 0 : iconLight.className.includes("idark"))) {
        iconLight === null || iconLight === void 0 ? void 0 : iconLight.classList.add("idark");
        page.classList.add("dark");
    }
    else {
        iconLight.classList.remove("idark");
        page.classList.remove("dark");
    }
}
