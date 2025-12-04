const listaImagenes = [
    "/project-break-dashboard/imagenes/Astronauta.jpg",
    "/project-break-dashboard/imagenes/edificio.jpg",
    "/project-break-dashboard/imagenes/espacio.jpg",
    "/project-break-dashboard/imagenes/jupiter.jpg",
    "/project-break-dashboard/imagenes/luna1.jpg",
    "/project-break-dashboard/imagenes/luna2.png",
    "/project-break-dashboard/imagenes/nebulosa.jpg",
    "/project-break-dashboard/imagenes/tierra.jpg",
    "/project-break-dashboard/imagenes/tierra2.jpg",
    "/project-break-dashboard/imagenes/tierra3.png",
    "/project-break-dashboard/imagenes/ventana.jpg",
]
const fondo = document.getElementById("fondo");
function cambiarimagen(){
    let imagenaleatoria = Math.floor(Math.random() * listaImagenes.length);

    const direccionaleatoria = listaImagenes[imagenaleatoria];

    fondo.style.backgroundImage = `url('${direccionaleatoria}')`;
}

cambiarimagen()

setInterval(cambiarimagen, 15000)