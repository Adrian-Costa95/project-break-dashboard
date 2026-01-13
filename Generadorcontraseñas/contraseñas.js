const entrada = document.getElementById("generador");
const boton = document.getElementById("btnContraseña");
const contraseña = document.getElementById("contraseñaGenerada");


const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numerico = "0123456789";
const simbolos = "!@#$%^&*()-_=+";

boton.addEventListener("click", () => {
    let valor = entrada.value
    valor = Number(valor)
    let mensaje = longitudusuario(valor)
    let contraseñafinal = generarContraseña(valor)
    if(valor === 1){
        contraseña.textContent = mensaje
    }else if(valor < 12){
        contraseña.textContent = mensaje
    }else if(valor > 50){
        contraseña.textContent = mensaje
    }else {
        contraseña.innerHTML=`
        <h1>Contraseña generada: </h1>
        <p> ${contraseñafinal} </p>`
    }
});

function longitudusuario(numero){
    if (numero === 0){
        return `Por favor, inserte un numero de caracteres para continuar.`
    }else if (numero < 12){
        return `Has introducido un valor de ${numero} cifras. Por favor, ingrese minimo 12 y maximo 50 `
    }else if(numero >= 50){
        return `Has introducido un valor de ${numero} cifras. Por favor, no supere las 50 cifras.`
    }else{
        return `numero valido`
    }
}

function generarContraseña(longitudusuario) {
    let contraseñanueva = "";
    const caracteresultilizados = mayusculas + minusculas + numerico + simbolos;
    for (let i = 0; i < longitudusuario; i++){
       let indice = Math.floor(Math.random() * caracteresultilizados.length)
       let letra = caracteresultilizados[indice]
       contraseñanueva += letra
    }
return contraseñanueva;

}


