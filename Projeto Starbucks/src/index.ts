const imgStarbucks: HTMLImageElement | null = document.getElementById("starbucks") as HTMLImageElement;
const miniaturaRosa: HTMLElement | null = document.getElementById("minRosa");
const miniaturaVerde: HTMLElement | null = document.getElementById("minVerde");
const miniaturaLaranja: HTMLElement | null = document.getElementById("minLaranja");
const circulo = document.getElementById("circulo");

miniaturaRosa?.addEventListener("click", () => {
    let page: HTMLElement = document.body
    if (circulo) {
        if (page.className.includes("dark")) {
            circulo.style.backgroundColor = "#781b5c"
            imgStarbucks.src = "./images/img3.png";
        }
        else {
            imgStarbucks.src = "./images/img3.png";
            circulo.style.backgroundColor = "#bf3899"
        }
    }
})

miniaturaLaranja?.addEventListener("click", () => {
    let page: HTMLElement = document.body

    if (circulo) {
        if (page.className.includes("dark")) {
            imgStarbucks.src = "./images/img2.png";
            circulo.style.backgroundColor = "#b05e64"
        }
        else {
            imgStarbucks.src = "./images/img2.png";
            circulo.style.backgroundColor = "#e9acb5"
        }
        console.log("entrei")
    }
})

miniaturaVerde?.addEventListener("click", () => {
    let page = document.body

    if (circulo) {
        if (page.className.includes("dark")) {
            circulo.style.backgroundColor = "#01653c"
            imgStarbucks.src = "./images/img1.png"
        }
        else {
            imgStarbucks.src = "./images/img1.png"
            circulo.style.backgroundColor = "#017143"
        }
    }
})

function DarkMode() {
    let iconLight = document.getElementById("iconLight");
    let page = document.body

    if (!iconLight?.className.includes("idark")) {
        iconLight?.classList.add("idark");
        page.classList.add("dark");
    }
    else {
        iconLight.classList.remove("idark");
        page.classList.remove("dark");
    }

}