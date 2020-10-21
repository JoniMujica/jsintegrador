//aca importo el array de objetos de data.js (esto para manejarlo como si fuera una db o API)
import datos from './data';

var cuerpo = document.getElementById("cuerpo");



function cargarElementos(){

}


//cuando cargue el HTML, manda a ejecutar la funcion 'cargarElementos'
cuerpo.addEventListener('load',cargarElementos());