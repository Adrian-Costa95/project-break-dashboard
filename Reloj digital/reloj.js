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
let frases = frasesporHoras(horas)
frase.textContent = frases
}

function frasesporHoras(hora){
    if(hora >= 0 && hora <= 6){
        return 'Es hora de descansar. Apaga y sigue mañana.'
    }else if(hora >= 7 && hora <= 11){
        return 'Buenos dias, desayuna fuerte y a darle al codigo'
    }else if(hora >= 12 && hora <= 13){
        return 'Echa un rato mas pero no olvides comer'
    }else if(hora >= 14 && hora <= 15){
        return 'Espero que hayas comido'
    }else if(hora >= 16 && hora <= 17){
        return 'Buenas tardes, el ultimo empujon'
    }else if(hora >= 18 && hora <= 21){
        return 'Esto ya son horas extras, ... piensa en parar pronto'
    }else{
        return 'Buenas noches, es hora de pensar en parar y descansar'
    }
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


