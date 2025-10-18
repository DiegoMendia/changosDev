// Seleccionamos todos los botones con la clase '.leer-mas-btn'
let botones = document.querySelectorAll('.leer-mas-btn');

// Recorremos todos los botones
botones.forEach(function(boton) {
  // Obtenemos la descripción adicional correspondiente al botón
  let descripcionAdicional = boton.closest('.profile-info').querySelector('.additional-desc');
  
  // Añadimos el evento de click a cada botón
  boton.addEventListener('click', function() {
    // Comprobamos si la descripción adicional está visible
    if (descripcionAdicional.style.display === 'none' || descripcionAdicional.style.display === '') {
      // Si está oculta, la mostramos y cambiamos el texto del botón
      descripcionAdicional.style.display = 'inline';
      boton.textContent = 'Leer menos';
    } else {
      // Si está visible, la ocultamos y cambiamos el texto del botón
      descripcionAdicional.style.display = 'none';
      boton.textContent = 'Leer más';
    }
  });
});
