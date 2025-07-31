// Esperamos a que todo el contenido esté cargado

document.addEventListener('DOMContentLoaded', () => {




// ----- Cookies -----

  const popup = document.getElementById('cookies-popup');
  const aceptar = document.getElementById('aceptar-cookies');
  const rechazar = document.getElementById('rechazar-cookies');

  if (!localStorage.getItem('cookiesAceptadas')) {
    popup.style.display = 'block';
  }

  aceptar.addEventListener('click', () => {
    localStorage.setItem('cookiesAceptadas', 'true');
    popup.style.display = 'none';
  });

  rechazar.addEventListener('click', () => {
    localStorage.setItem('cookiesAceptadas', 'false');
    popup.style.display = 'none';
  });





// ----- Botón hamburguesa -----

  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  menuToggle.addEventListener('click', () => {
    
    console.log('Click detectado en botón hamburguesa'); //para pruebas (estoy teniendo problemas con ocultar el menu en movil o pantalla pequeña)

    nav.classList.toggle('activo');
  });
});

