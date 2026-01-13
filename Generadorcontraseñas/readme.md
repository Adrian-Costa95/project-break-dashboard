<!-- Microtareas

---Preparar el HTML OK

Input para longitud (<input id="length">)
Botón “Generar”
<p id="passwordResult"> para mostrar la contraseña.

---Definir los “conjuntos” de caracteres OK

Variables:
const MAYUS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUS = "abcdefghijklmnopqrstuvwxyz";
const NUM = "0123456789";
const SIMB = "!@#$%^&*()-_=+";

---Leer la longitud que ha puesto el usuario OK

Método:

document.getElementById()
input.value

---Asegurar que hay mínimo 1 de cada tipo OK

Crear primero 1 mayúscula, 1 minúscula, 1 número, 1 símbolo.

---Rellenar el resto de caracteres al azar OK

Métodos:

Math random()
Math.floor()
Bucle for

---Mezclar o simplemente mostrar el resultado OK

Método:

Construir un string con +=
Mostrarlo en el HTML con textContent

---Conectar el botón con la función

Método:

button.addEventListener("click", funcion) -->