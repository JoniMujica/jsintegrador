//aca importo el array de objetos de data.js (esto para manejarlo como si fuera una db o API)
import datos from './data.js';
var cartas = document.getElementsByClassName("cards");
var image = document.getElementsByTagName("img");
var totuloprod = document.getElementsByTagName("h2");
var precio = document.getElementsByClassName("price");
var descripcion = document.getElementsByClassName("desc");

/*
for (var i = 0; i < cartas.length; i++) {
    image[i].src = datos[i].src;
    console.log(image[i]);
    console.log(datos[i].src)
} */


function cargarElementos(){
    
    for (var i = 0; i < cartas.length; i++) {
        image[i].src = datos[i].src;
        console.log(image[i]);
        console.log(datos[i].src)
    }

}


//cuando cargue el HTML, manda a ejecutar la funcion 'cargarElementos'
window.addEventListener('load',cargarElementos);