// Seleccionar elementos
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

// Alternar menú
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});