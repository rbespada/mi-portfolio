// Esperamos a que todo el contenido esté cargado

document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('cookies-popup');
  const aceptar = document.getElementById('aceptar-cookies');
  const rechazar = document.getElementById('rechazar-cookies');



 // Verificamos si ya se ha aceptado o rechazado previamente
  
 if (!localStorage.getItem('cookiesAceptadas')) {
    popup.style.display = 'block';
  }



// Al hacer clic en "Aceptar"

aceptar.addEventListener('click', () => {
    localStorage.setItem('cookiesAceptadas', 'true');
    popup.style.display = 'none';
  });



// Al hacer clic en "Rechazar"

rechazar.addEventListener('click', () => {
    localStorage.setItem('cookiesAceptadas', 'false');
    popup.style.display = 'none';
  });
});



// Activar botón hamburguesa 

const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('activo');
});
