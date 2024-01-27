const imgStarbucks: HTMLImageElement | null = document.getElementById("starbucks") as HTMLImageElement;
const miniaturaRosa: HTMLElement | null = document.getElementById("minRosa");
const miniaturaVerde: HTMLElement | null = document.getElementById("minVerde");
const miniaturaLaranja: HTMLElement | null = document.getElementById("minLaranja");
const circulo = document.getElementById("circulo");

miniaturaRosa?.addEventListener("click", () => {
    let page: HTMLElement = document.body
    if (circulo) {
        imgStarbucks.src = "./images/img3.png";
        circulo.style.backgroundColor = "#bf3899"
    }
})

miniaturaLaranja?.addEventListener("click", () => {
    let page: HTMLElement = document.body

    if (circulo) {
        imgStarbucks.src = "./images/img2.png";
        circulo.style.backgroundColor = "#e9acb5"
    }
})

miniaturaVerde?.addEventListener("click", () => {
    let page: HTMLElement = document.body

    if (circulo) {
        imgStarbucks.src = "./images/img1.png"
        circulo.style.backgroundColor = "#017143"
    }
})

function DarkMode() {
    let iconLight: HTMLElement | null = document.getElementById("iconLight");
    let page: HTMLElement = document.body

    if (!iconLight?.className.includes("idark")) {
        iconLight?.classList.add("idark");
        page.classList.add("dark");
    }
    else {
        iconLight.classList.remove("idark");
        page.classList.remove("dark");
    }
}

function pedirCafe() {
    alert("Pedido realizado com sucesso!")
}