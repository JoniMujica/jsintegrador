//aca importo el array de objetos de data.js (esto para manejarlo como si fuera una db o API)
import datos from './data';

var cuerpo = document.getElementById("cuerpo");



function cargarElementos(){
    var cartas = document.getElementsByClassName("cards");
    var image = document.getElementsByTagName("img");
    var totuloprod = document.getElementsByTagName("h2");
    var precio = document.getElementsByClassName("price");
    var descripcion = document.getElementsByClassName("desc");

    for (var i = 0; i < cartas.length; i++) {
        image[i].src = datos[i].src;
    }

}


//cuando cargue el HTML, manda a ejecutar la funcion 'cargarElementos'
cuerpo.addEventListener('load',cargarElementos());