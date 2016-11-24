
$(document).ready(function(){
  console.log("El documento ya está listo");
});

var numeroAlAzar;
var indiceActual = 0;
var puntos = 0;
var intentos = 5;


var imagenes = [ "Alejandra.JPG", "Alex.JPG", "Flor.JPG", "Monica.JPG", "Paola.JPG", "Sandra.JPG"
 ];

var nombres = ["Alejandra", "Alex", "Flor", "Monica", "Paola", "Sandra"
];


  function enteroRandomEnRango(min, max) {
  var numero = Math.random() * (max - min) + min;
  var entero = Math.floor(numero);
  return entero;
  };

  function desplegarPuntos(){
    $('#spanPuntos').text(puntos);
  };

  function desplegarNuevaJugada() {
    var tamanoArreglo = nombres.length;
    if (tamanoArreglo > 0){
      numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);
      var imagen = 'fotos/' + imagenes[numeroAlAzar];
      //Cambiar un atributo 
      $('#imagenPersona').attr('src', imagen);
    } else {
      alert('Ganaste');
    }

   };

  $(document).ready(function(){
    $('#btnRevisar').click(function(){
    var nombre =$('#inputNombre').val();
    console.log(nombre);

    var nombreAdivinar = nombres[numeroAlAzar];
    console.log('El nombre correcto es: '+nombreAdivinar);

    if (nombre === nombreAdivinar) {

      puntos = puntos + 5;
      //Para quitar el elemento que ya no queremos
      nombres.splice(numeroAlAzar,1);
      imagenes.splice(numeroAlAzar,1);

      desplegarNuevaJugada();      
    } else {
      puntos = puntos-1; //puntos--
      intentos--; //intentos++
      alert('Vuelve a intentar, te quedan: '+intentos+' intentos.');
      if (intentos<=1) {
        alert('Perdiste!');
      }
    }

    desplegarNuevaJugada(); 
    desplegarPuntos();
    });
  });


