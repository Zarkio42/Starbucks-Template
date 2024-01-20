const imgStarbucks = document.getElementById("starbucks");
const miniaturaRosa = document.getElementById("minRosa");
const miniaturaVerde = document.getElementById("minVerde");
const miniaturaLaranja = document.getElementById("minLaranja");
const circulo = document.getElementById("circulo");

miniaturaRosa.addEventListener("click", () =>{
    imgStarbucks.src = "./images/img3.png";
    circulo.style.backgroundColor = "#bf3899"

})

miniaturaLaranja.addEventListener("click", () =>{
    imgStarbucks.src = "./images/img2.png";
    circulo.style.backgroundColor = "#e9acb5"
    imgStarbucks.style.BoxShadow ="0px 0px 5px rgba(50, 50, 50, 0.77)"
})

miniaturaVerde.addEventListener("click", () =>{
    imgStarbucks.src = "./images/img1.png"
    circulo.style.backgroundColor = "#017143"
})

function DarkMode(){
    
}