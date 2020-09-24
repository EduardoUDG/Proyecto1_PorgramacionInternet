window.sr = ScrollReveal();

  sr.reveal('.navbar', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

  sr.reveal('.item-center', {
    duration: 2000,
    origin: 'bottom',
    distance: '-500px'
  });

  sr.reveal('.scroll-portafolio', {
    duration: 4000,
    origin: 'left',
    distance: '-200px'
  });

  sr.reveal('.scroll-menu', {
    duration: 4000,
    origin: 'top',
    distance: '-200px'
  });
  sr.reveal('.scroll-galeria', {
    duration: 4000,
    origin: 'top',
    distance: '-300px'
  });
  sr.reveal('.scroll-eventos', {
    duration: 4000,
    origin: 'top',
    distance: '-300px'
  });
  sr.reveal('.scroll-contacto', {
    duration: 4000,
    origin: 'left',
    distance: '-300px'
  });
  sr.reveal('.scroll-footer', {
    duration: 3500,
    origin: 'top',
    distance: '-300px'
  });

  /* Scrips de Ventana modal de imagenes */

  $(function(){
    
    $('.cartas-galeria .contenedor-imagen').on('click',function(){
      $('#modal').modal;
      var ruta_imagen = ($(this).find('img').attr('src'));
      $('#imagen-modal').attr('src', ruta_imagen);


      
    });
  })