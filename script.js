
// ======================================
// 🧠 MENTE POSITIVA - SCRIPT.JS
// ======================================

// Animación de aparición de las tarjetas
const elementos = document.querySelectorAll(
  '.card, .emotion, .esteem-box, .section-title, .final-message'
);

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      observador.unobserve(entrada.target);
    }
  });
}, {
  threshold: 0.15
});

elementos.forEach((elemento) => {
  elemento.classList.add('reveal');
  observador.observe(elemento);
});

// Navegación activa
const enlaces = document.querySelectorAll('nav a');

enlaces.forEach((enlace) => {
  enlace.addEventListener('click', () => {
    enlaces.forEach((item) => item.classList.remove('activo'));
    enlace.classList.add('activo');
  });
});

// Botón para volver arriba
const botonArriba = document.createElement('button');

botonArriba.innerHTML = '↑';
botonArriba.className = 'back-top';
botonArriba.setAttribute('aria-label', 'Volver arriba');

document.body.appendChild(botonArriba);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    botonArriba.classList.add('mostrar');
  } else {
    botonArriba.classList.remove('mostrar');
  }
});

botonArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mensaje de bienvenida en consola
console.log('🧠 Bienvenido a Mente Positiva');
console.log('💚 Cuida tu mente, transforma tu vida.');
