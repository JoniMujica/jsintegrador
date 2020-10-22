//aca importo el array de objetos de data.js (esto para manejarlo como si fuera una db o API)
import datos from './data.js';

var tablaro = document.getElementById("tablaP");
/*
function cargarElementos(){
    var cartas = document.getElementsByClassName("cards");
    var image = document.getElementsByTagName("img");
    var tituloProd = document.getElementsByTagName("h2");
    var precio = document.getElementsByClassName("price");
    var descripcion = document.getElementsByClassName("desc");

    for (var i = 0; i < datos.length; i++) {
        image[i].src = datos[i].src;
        image[i].alt = datos[i].title;
        image[i].title = datos[i].title;
        tituloProd[i].innerText = datos[i].title;
        descripcion[i].innerText = datos[i].descripcion;
        precio[i].innerText = "$" + datos[i].price
    }
}  */



var espacioTAB = document.createElement('div')

function cargarElementos(){
    

    if ( validarDatos() == true) {
        for (var i = 0; i < datos.length; i++) {
        const contenido = `
            <div class="cards">
            <img src=${datos[i].src} >
            <h2>${datos[i].title}</h2>
            <p class="price">${datos[i].price}</p>
            <p class="desc">${datos[i].descripcion}</p>
            <button class="btnAgregar">Agregar al Carrito</button>`
            tablaro.innerHTML += contenido;
        }
    }else{
        // si no hay elementos en el array de objetos, imprime en pantalla esto
        tablaro.innerHTML = "<p>No se encontraron elementos en la base de datos!!</p>";
    }

} 

validarDatos = () => {
    return datos.length != 0 ? true : false
}

function createElement(str)
{
  var div = document.createElement('div');
  div.innerHTML = str;
  return div.childNodes;
}

//cuando cargue el HTML, manda a ejecutar la funcion 'cargarElementos'
window.addEventListener('load',cargarElementos);