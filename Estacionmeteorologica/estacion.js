const contenedor1 = document.querySelector(".cuadrometeorologico");
const ciudad = document.getElementById("ciudad");
const icono = document.getElementById("icono");
const clima = document.getElementById("clima");
const grados = document.getElementById("grados");
const contenedor2 = document.querySelector(".complementario");
const precipitacion = document.getElementById("precipitacion");
const viento = document.getElementById("viento");
const humedad = document.getElementById("humedad");
const porhora = document.querySelector(".previsionhoras");

const API = "https://api.weatherapi.com/v1/forecast.json?key=9b0208d92f644657a00143504251012&q=Madrid&days=1&aqi=no&alerts=no";


fetch("https://api.weatherapi.com/v1/forecast.json?key=9b0208d92f644657a00143504251012&q=Madrid&days=1&aqi=no&alerts=no")
.then ((Response) => {
    return Response.json()
}) .then ((data) => {
    console.log(data)
    ciudad.textContent = `${data.location.name}, ${data.location.country}`
    clima.textContent = `${data.current.condition.text}`
    grados.textContent = `${data.current.temp_c}ºc`
    const iconoactual = "https:" + data.current.condition.icon;
    icono.src = iconoactual;
    precipitacion.textContent = `Precipitacion: ${data.current.precip_in} mm`
    viento.textContent = `Viento: ${data.current.wind_kph} Km/h`
    humedad.textContent = `Humedad relativa: ${data.current.humidity} %`

    porhora.innerHTML = "";
    const horas = data.forecast.forecastday[0].hour;
    horas.forEach((hora) => {
        
        const horaTexto = hora.time.split(" ")[1];
        const iconoURL = "https:" + hora.condition.icon;
        const temperatura = hora.temp_c;
        
        const primeraTarjeta = `
        <div class="tarjetahora1">
        <p>${horaTexto}</p>
        <img src="${iconoURL}" alt="${hora.condition.text}">
        <p> ${temperatura}ºC</p>
        </div>
        `;
        
        porhora.innerHTML += primeraTarjeta;
    });
    

}).catch((error) => {
    console.log("ha ocurrido un error", error);
});