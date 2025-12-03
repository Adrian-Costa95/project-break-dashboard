<!-- Microtareas

---Preparar el HTML

Input título (id="linkTitle")

Input URL (id="linkUrl")

Botón “Añadir”

Contenedor <div id="linksList"></div>

---Leer los datos del formulario

Métodos:
document.getElementById()
input.value

---Estructura de datos dentro de JS

Un array de objetos:
[{ title: 'Google', url: 'https://google.com' }, ...]

---Guardar en localStorage

Métodos:

localStorage.setItem("links", ...)
JSON.stringify()

---Leer desde localStorage al cargar la página

Métodos:

localStorage.getItem("links")
JSON.parse()
Si no hay datos, usar [].

---Pintar los links en el DOM

Métodos:

innerHTML o
document.createElement(), appendChild()

Cada link:

Título clicable (<a href="...">)
Botón de eliminar.

---Eliminar un link

Métodos:

array.filter() o array.splice()
Volver a guardar en localStorage
Volver a pintar la lista -->