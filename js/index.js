//aca importo el array de objetos de data.js (esto para manejarlo como si fuera una db o API)
import datos from './data.js';


function cargarElementos(){
    var cartas = document.getElementsByClassName("cards");
    var image = document.getElementsByTagName("img");
    var tituloProd = document.getElementsByTagName("h2");
    var precio = document.getElementsByClassName("price");
    var descripcion = document.getElementsByClassName("desc");

    for (var i = 0; i < cartas.length; i++) {
        image[i].src = datos[i].src;
        image[i].alt = datos[i].title;
        image[i].title = datos[i].title;
        tituloProd[i].innerText = datos[i].title;
        descripcion[i].innerText = datos[i].descripcion;
        precio[i].innerText = "$" + datos[i].price
    }
}


//cuando cargue el HTML, manda a ejecutar la funcion 'cargarElementos'
window.addEventListener('load',cargarElementos);