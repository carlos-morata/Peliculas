// // Array con las películas

// const films = [
//     {
//         title: "Gladiator",
//         year: 2000,
//         description: "Un general romano traicionado llega a ser gladiador para vengar la muerte de su familia y restaurar el honor.",
//         url_img: "./img/Gladiator.png",
//         gender: "Acción"
//     },
//     {
//         title: "Capitán Phillips",
//         year: 2013,
//         description: "Un capitán de un barco es secuestrado por piratas somalíes.",
//         url_img: "./img/Capitán Phillips.jpg",
//         gender: "Drama"
//     },
//     {
//         title: "El Francotirador",
//         year: 2014,
//         description: "Historia del francotirador militar de EE.UU. Chris Kyle durante misiones en Irak.",
//         url_img: "./img/El Francotirador.jpg",
//         gender: "Drama"
//     },
//     {
//         title: "Resacón en Las Vegas",
//         year: 2009,
//         description: "Tres amigos despiertan sin recordar lo ocurrido y con el novio desaparecido; deben reconstruir la noche.",
//         url_img: "./img/Resacón en las Vegas.jpg",
//         gender: "Comedia"
//     },
//     {
//         title: "Viernes 13",
//         year: 1980,
//         description: "Un grupo de jóvenes es asesinado uno a uno por un misterioso asesino en un campamento de verano.",
//         url_img: "./img/Viernes 13.jpg",
//         gender: "Terror"
//     },
//     {
//         title: "Corazones Malheridos",
//         year: 2022,
//         description: "Una cantante aspirante y un marine se casan por conveniencia, pero enfrentan tragedias que transforman su relación.",
//         url_img: "./img/Corazones Malheridos.jpg",
//         gender: "Romántico"
//     }
// ]
// function renderFilms(filmsArray) {

//     // Crear tabla parte estática
//     const sectionFilms = document.getElementById("section-films")
//     const table = document.createElement("table")
//     table.id = "table-film"
//     table.innerHTML += 
//     `<thead>
//         <tr>
//             <th><h3>Título</h3></th>
//             <th><h3>Año</h3></th>
//             <th><h3>Descripción</h3></th>
//             <th><h3>Portada</h3></th>
//             <th><h3>Género</h3></th>
//             <th></th>
//         </tr>
//     </thead>
//     <tbody id="table-body"></tbody>`
//     sectionFilms.appendChild(table)

//     // Crear tabla parte dinámica
//     const tableBody = document.getElementById("table-body")
//     for(let film of filmsArray) {
//         tableBody.innerHTML +=
//         `<tr>
//             <td><h3>${film.title}</h3></td>
//             <td><p>${film.year}</p></td>
//             <td><p>${film.description}</p></td>
//             <td><img src="${film.url_img}" alt="Imagen de la portada de ${film.title}"></td>
//             <td><p>${film.gender}</p></td>
//             <td><button class="button-del">Eliminar</button></td>
//             <td><button class="button-edit">Editar</button></td>

//         </tr>
//         `
//     } 
//     // Llamar a la función pasandole el array
//     renderFilms(films)

//     // Validar datos del formulario
//     document.getElementById("form-add").addEventListener("submit", (event) => {
//         // Evitar el commportamiento por defecto del formulario
//         event.preventDefault()

//         // Validación Año
//         const yearInput = document.getElementById("year")
//         // Convertirlo a Número
//         const yearValue = parseInt(yearInput.value.trim(), 10)
//         // Año actual
//         const currentYear = new Date().getFullYear() 
//         //  console.log({ yearValue, yearInput, currentYear })
//         if (isNaN(yearValue) || !yearValue || yearValue < 1800 || yearValue > currentYear || yearInput.value.trim().length !== 4 ) {
//             alert(`El año debe estar entre 1800 y ${currentYear} y tener 4 cifras`)
//             return
//         }
//     })  
// }

// // Filtrar por género
// function filterGender() {
//     const select = document.getElementById("filterGender")

//     // Creamos evento change
//     select.addEventListener("change", () => {
//         // Seleccionamos género
//         const selectValue = select.value

//         // Filtrar películas por género
//         const filterFilms = films.filter(filmF => filmF.gender === selectValue)

//         renderFilms(filterFilms)
//     })
// }
// filterGender()


// Array con las películas
const films = [
    {
        title: "Gladiator",
        year: 2000,
        description: "Un general romano traicionado llega a ser gladiador para vengar la muerte de su familia y restaurar el honor.",
        url_img: "./img/Gladiator.png",
        gender: "Acción"
    },
    {
        title: "Capitán Phillips",
        year: 2013,
        description: "Un capitán de un barco es secuestrado por piratas somalíes.",
        url_img: "./img/Capitán Phillips.jpg",
        gender: "Drama"
    },
    {
        title: "El Francotirador",
        year: 2014,
        description: "Historia del francotirador militar de EE.UU. Chris Kyle durante misiones en Irak.",
        url_img: "./img/El Francotirador.jpg",
        gender: "Drama"
    },
    {
        title: "Resacón en Las Vegas",
        year: 2009,
        description: "Tres amigos despiertan sin recordar lo ocurrido y con el novio desaparecido; deben reconstruir la noche.",
        url_img: "./img/Resacón en las Vegas.jpg",
        gender: "Comedia"
    },
    {
        title: "Viernes 13",
        year: 1980,
        description: "Un grupo de jóvenes es asesinado uno a uno por un misterioso asesino en un campamento de verano.",
        url_img: "./img/Viernes 13.jpg",
        gender: "Terror"
    },
    {
        title: "Corazones Malheridos",
        year: 2022,
        description: "Una cantante aspirante y un marine se casan por conveniencia, pero enfrentan tragedias que transforman su relación.",
        url_img: "./img/Corazones Malheridos.jpg",
        gender: "Romántico"
    }
];

// Función para renderizar la tabla
function renderFilms(filmsArray) {
    // Eliminar tabla anterior si existe
    const existingTable = document.getElementById("table-film");
    if (existingTable) existingTable.remove();

    const sectionFilms = document.getElementById("section-films");
    const table = document.createElement("table");
    table.id = "table-film";
    table.innerHTML = `
        <thead>
            <tr>
                <th><h3>Título</h3></th>
                <th><h3>Año</h3></th>
                <th><h3>Descripción</h3></th>
                <th><h3>Portada</h3></th>
                <th><h3>Género</h3></th>
                <th></th>
            </tr>
        </thead>
        <tbody id="table-body"></tbody>
    `;
    sectionFilms.appendChild(table);

    const tableBody = document.getElementById("table-body");

    for (let film of filmsArray) {
        tableBody.innerHTML += `
            <tr>
                <td><h3>${film.title}</h3></td>
                <td><p>${film.year}</p></td>
                <td><p>${film.description}</p></td>
                <td><img src="${film.url_img}" alt="Imagen de la portada de ${film.title}"></td>
                <td><p>${film.gender}</p></td>
                <td><button class="button-del">Eliminar</button></td>
                <td><button class="button-edit">Editar</button></td>
            </tr>
        `;
    }
}

// Llamada inicial para renderizar todas las películas
renderFilms(films);

// Validación del formulario
document.getElementById("form-add").addEventListener("submit", (event) => {
    event.preventDefault();

    const titleInput = document.getElementById("title");
    const titleValue = titleInput.value.trim();
    if (titleValue === "") {
        alert("Introduce un título por favor");
        return;
    }

    const yearInput = document.getElementById("year");
    const yearValue = parseInt(yearInput.value.trim(), 10);
    const currentYear = new Date().getFullYear();
    if (isNaN(yearValue) || yearValue < 1800 || yearValue > currentYear || yearInput.value.trim().length !== 4) {
        alert(`El año debe estar entre 1800 y ${currentYear} y tener 4 cifras`);
        return;
    }

    // Aquí puedes añadir la lógica para agregar la nueva película al array y volver a renderizar
});

// Filtro por género
function filterGender() {
    const select = document.getElementById("filterGender");

    select.addEventListener("change", () => {
        const selectValue = select.value;

        // Filtrar películas por género
        const filteredFilms = films.filter(film => film.gender === selectValue);

        // Renderizar tabla con películas filtradas
        renderFilms(filteredFilms);
    });
}

// Inicializar filtro
filterGender();
