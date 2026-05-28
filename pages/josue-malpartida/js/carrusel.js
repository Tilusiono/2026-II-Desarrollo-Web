let c=0
const imagenes = document.getElementById("active");

function efecto(){
    c++;
    if(c>5) c=1
    imagenes.setAttribute("src","img/imagenes"+c+"jpg")
}

setInterval(efecto,1000);