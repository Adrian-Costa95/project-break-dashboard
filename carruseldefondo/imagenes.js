const listaImagenes = [
    "/imagenes/Astronauta.jpg",
    "/imagenes/edificio.jpg",
    "/imagenes/espacio.jpg",
    "/imagenes/jupiter.jpg",
    "/imagenes/luna1.jpg",
    "/imagenes/luna2.png",
    "/imagenes/nebulosa.jpg",
    "/imagenes/tierra.jpg",
    "/imagenes/tierra2.jpg",
    "/imagenes/tierra3.png",
    "/imagenes/ventana.jpg",
]
const fondo = document.getElementById("fondo");
function cambiarimagen(){
    let imagenaleatoria = Math.floor(Math.random() * listaImagenes.length);

    const direccionaleatoria = listaImagenes[imagenaleatoria];

    fondo.style.backgroundImage = `url('${direccionaleatoria}')`;
}

cambiarimagen()

setInterval(cambiarimagen, 15000)