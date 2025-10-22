# 🎬 Proyecto: Películas
![Imagen del proyecto](./img/Proyecto Películas)

## 📖 Descripción
Aplicación web que permite **añadir, mostrar, filtrar, editar y eliminar películas**.  
Está desarrollada con **HTML, CSS (Flexbox)** y **JavaScript**, y se divide en dos fases principales: una centrada en la creación y validación del formulario y otra en el filtrado y manipulación dinámica de las películas.

---

## 🧠 Tecnologías utilizadas
- **HTML5:** estructura del contenido y uso de etiquetas semánticas (`<table>`, `<tr>`, `<td>`, `<th>`, `<form>`, etc.).
- **CSS3 / Flexbox:** estilos visuales y diseño adaptable a diferentes dispositivos.
- **JavaScript (ES6+):** manipulación del DOM, validaciones, filtros dinámicos y renderización de las películas.

---

## 🎯 Objetivos del proyecto

### 🧩 Fase 1
- Crear un **formulario** para añadir una nueva película con los siguientes campos:
  - Título
  - Año
  - Descripción
  - URL de la imagen
  - Género  
- **Validar los campos del formulario**, asegurando que:
  - El campo **año** tenga exactamente **4 cifras**.
  - El año se encuentre **entre 1800 y el año actual**.
- Crear un **filtro** para mostrar películas por género.
  - Géneros disponibles: **Terror**, **Acción**, **Comedia**, **Romántica**.
- **Almacenar las películas en un array.**
- **Mostrar todas las películas** en una **tabla HTML** utilizando etiquetas como:
  ```html
  <table>, <tr>, <td>, <th>

### 🧠 Fase 2

- Añadir un **filtro de búsqueda** por texto:
- Incluir un input de texto con el **evento onchange.**
- El usuario podrá escribir el nombre de una película y se **renderizarán solo las películas que coincidan.**

- **Editar una película:**
- Permitir **modificar** los **datos** de una **película existente.**
- **Actualizar la información en el array y en la tabla.**

- **Borrar una película:**
- Incluir un **botón** o icono que permita **eliminar** una **película concreta** del listado.
- La **tabla se debe volver a renderizar automáticamente.**