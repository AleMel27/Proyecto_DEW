/* --------------------------------- BANNER --------------------------------- */
const banner = document.getElementById("banner")

let c = 0

function carrusel() {
    c++
    if(c>5) c=1
    banner.src = `img/banner${c}.jpg`
}
setInterval(carrusel, 1000)
