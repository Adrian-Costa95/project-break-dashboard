<!-- Microtareas

Preparar el HTML

---Input ciudad (opcional) o fija

Elementos para:

Ciudad y país
Estado del clima
Icono
Grados
Precipitaciones / humedad / viento
Lista de previsión por horas

---Definir la API KEY y la URL base

Variables:

const apiKey = "TU_API_KEY";
const baseUrl = "https://api.weatherapi.com/v1";

---Hacer la petición con fetch

Métodos:

fetch(url)
.then(res => res.json())
o
async / await

---Leer los datos que necesitas del JSON

Acceder a propiedades como:

data.location.name
data.location.country
data.current.temp_c
data.current.condition.text
data.current.condition.icon
data.forecast.forecastday[0].hour (previsión por horas)

---Pintar los datos en el HTML

Cambiar textContent, src, innerHTML
Manejar errores
Try/catch básico o .catch() de fetch. -->