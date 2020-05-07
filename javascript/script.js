(function(){

  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
  //                                   Ubicacion del pin     zoom
    var map = L.map('mapa').setView([6.250907, -75.597503], 17);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
          //Ubicacion del mapa
  L.marker([6.250907, -75.597503]).addTo(map)
    .bindPopup('H & S Linea de gas <br> Aqui estamos ubicados')
    .openPopup()
    .binTooltip('Un texto escondido (hover)')
    .openTooltip();

    //Ingresa todo el codigo JavaScript a partir de esta linea

  });

  var ban = 0;

  $('.icono').on('click', function(){

    if(ban == 1){

      $('.nav-mobile').css({'left':'0'});
      $('.icono').css({'color':'#F8E93B'});

      ban = 0;

    } else{

      ban = 1;

      $('.nav-mobile').css({'left':'-100%'});
      $('.icono').css({'color':'#4760A4'});

    }

  });

})();
