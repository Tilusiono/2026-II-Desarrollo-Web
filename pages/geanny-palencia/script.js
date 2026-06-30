const items = document.querySelectorAll('.carrusel-item');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
let index = 0;

function mostrarImagen(nuevoIndex) {

    items[index].classList.remove('activo');

    if (nuevoIndex >= items.length) {
        index = 0; 
    } else if (nuevoIndex < 0) {
        index = items.length - 1; 
    } else {
        index = nuevoIndex;
    }

    items[index].classList.add('activo');
}

btnNext.addEventListener('click', () => {
    mostrarImagen(index + 1);
});

btnPrev.addEventListener('click', () => {
    mostrarImagen(index - 1);
});

setInterval(() => {
    mostrarImagen(index + 1);
}, 4000);