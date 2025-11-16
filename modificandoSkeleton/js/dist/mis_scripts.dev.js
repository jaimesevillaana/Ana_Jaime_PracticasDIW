"use strict";

// js/mis_scripts.js
document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    // Inicialmente, el menú está oculto por CSS en móvil.
    // Usamos una clase CSS para forzar la visibilidad al hacer clic.
    navToggle.addEventListener('click', function () {
      // Alterna la propiedad 'display' o una clase 'open' para mostrar/ocultar
      // Opción simple: alternar la propiedad 'display'
      if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
        navLinks.style.display = 'none';
      } else {
        // Usamos 'flex' para mantener el centrado vertical que definimos en SASS para móvil
        navLinks.style.display = 'flex';
      }
    });
  }
});