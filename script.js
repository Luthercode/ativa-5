const fotos = document.querySelectorAll('.foto');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTexto = document.getElementById('modal-texto');
const closeBtn = document.querySelector('.close');
let startX = 0;
let currentX = 0;

fotos.forEach(foto => {
    foto.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        modalTexto.textContent = this.getAttribute('data-texto');
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    modalImg.style.transform = 'translateX(0)';
};

modalImg.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    modalImg.style.transition = 'none';
});

document.addEventListener('mousemove', function(e) {
    if (startX !== 0) {
        currentX = e.clientX - startX;
        modalImg.style.transform = `translateX(${currentX}px)`;
    }
});

document.addEventListener('mouseup', function() {
    if (startX !== 0) {
        modalImg.style.transition = 'transform 0.3s';
        modalImg.style.transform = 'translateX(0)';
        startX = 0;
    }
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        modalImg.style.transform = 'translateX(0)';
    }
};
