const hora = document.getElementById("time")
const fecha = document.getElementById("date")
const frase = document.getElementById("text")

function ActualizarReloj(){
let horaActual = new Date()

let horas = horaActual.getHours()
let horasFormateada = formateo(horas)

let minutos = horaActual.getMinutes()
let minutosFormateados = formateo(minutos)

let segundos = horaActual.getSeconds()
let segundosFormateados = formateo(segundos)

let dia = horaActual.getDate()
let diaFormateado = formateo(dia)

let mes = horaActual.getMonth()+ 1;
let mesFormateado = formateo(mes)

let año = horaActual.getFullYear()

let horaCompleta = `${horasFormateada} : ${minutosFormateados} : ${segundosFormateados}`
let fechaCompleta = `${diaFormateado}/${mesFormateado}/${año}`

hora.textContent = horaCompleta
fecha.textContent = fechaCompleta
}
function formateo(numero){
    if(numero<10){
        return "0" + numero;
    }else{
        return numero;
    }
}

setInterval(() => {
    ActualizarReloj()
},1000)


