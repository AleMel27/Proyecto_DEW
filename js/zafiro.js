/* --------------------------------- BANNER --------------------------------- */
const banner = document.getElementById("banner")

let c = 0

function carrusel() {
    c++
    if(c>5) c=1
    banner.src = `img/banner${c}.jpg`
}
setInterval(carrusel, 1000)
/* ---------------------------- CAMBIO DE PAGINAS --------------------------- */
document.querySelector('a[href="#reservas"]').onclick = () => {
    document.querySelector("main").style.display = "none";
    document.querySelector("#form").style.display = "block";
};
document.querySelector('a[href="#inicio"]').onclick = () => {
    document.querySelector("main").style.display = "block";
    document.querySelector("#form").style.display = "none";
};