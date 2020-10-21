/*
aca yo queria imortar las imagenes como reactJS pero no me dejo
asi que importo los scrips como metodo 'module' en el html para que se puedan comunicar y las imagenes los
manejo con constantes para usarlos en el array de objetos
 */

const imagen1 = "../img/camera-sony.jpg";
const imagen2 = "../img/hp-envy.jpg";
const imagen3 = "../img/iphone.jpg";

//creo un array de objetos para enviarselo al html principal como datos
const datable = [
    {
        id: 1,
        title: 'Sony Came',
        alt: 'Sony Camera FULL HD',
        url: imagen1,
        descripcion:'Camra FULL HD ultimo modelo digital!',
        price: 1500
    },
    {
        id: 2,
        title: 'HP Envy',
        alt: 'Laptop HP envy',
        url: imagen2,
        descripcion:'Notebook HP envy 360° SDD 500GB 16gb RAM I7',
        price: 1500
    },
    {
        id: 3,
        title: 'Iphone',
        alt: 'Iphone ONE',
        url: imagen3,
        adescripcionbout:'IPHONE ONE! lo ultimo en tecnologia',
        price: 5200
    }
];

export default datable;