// Películas
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
]

// Crear Tabla
const sectionFilms = document.querySelector(".section-films")
const tableFilms = document.createElement("table")
tableFilms.className = "table-films"

// Parte estática de la tabla
tableFilms.innerHTML = 
    `<thead>
        <tr>
            <th><h3>Portada</h3></th>
            <th><h3>Título</h3></th>
            <th><h3>Año</h3></th>
            <th><h3>Descripción</h3></th>
            <th><h3>Género</h3></th>
            <th><h3>Botones</h3></th>
         </tr>
    </thead>
    <tbody id="table-body"></tbody>`
sectionFilms.appendChild(tableFilms)

const tableBody = document.getElementById("table-body")

function renderFilms (filmstoRender = films) {
// Vacíar el tbody de la tabla para evitar duplicados
tableBody.innerHTML = ""

// Parte Dinámica de la tabla
    filmstoRender.forEach(film => {
    tableBody.innerHTML += 
        `<tr class="row-film">
            <td>
                <img src="${film.url_img}" alt="Portada de ${film.title}" title="${film.title}">
            </td>
            <td>
                <h4>${film.title}</h4>
            </td>
            <td>
                <p>${film.year}</p>
            </td>
            <td>
                <p>${film.description}</p>
            </td>
            <td>
                <p>${film.gender}</p>
            </td>
            <td>
                <button class="button-del">Eliminar</button>
                <button class="button-edit">Editar</button>
            </td>
        </tr>`
    })
tableFilms.appendChild(tableBody)

    // Añadir película
    document.getElementById("form-film").addEventListener("submit", (event)=>{
    // Evitamos comportamiento por defecto del formulario
    event.preventDefault()

    // Añadir película del usuario
    const title = event.target.title.value.trim()
    const year = parseInt(event.target.year.value.trim())
    const description = event.target.description.value.trim()
    const url_img = event.target.urlImg.value.trim()
    const gender = event.target.gender.value.trim()

    // Validación año -> Número - Máximo 4 dígitos
    const validationYear = /^\d{4}$/
    // Sacar año actual
    const currentYear = new Date().getFullYear()
    // Comprobar validación
    if(year.toString().match(validationYear) && year >= 1800 && year <= currentYear) {
        // Nuevo objeto para añadir al array films
        const newFilm = { title, year, description, url_img, gender}
        // Añadir al array la nueva película
        films.push(newFilm)
        // Limpiar formulario
        event.target.reset()
        renderFilms()
    } else {
        alert(`Ingresa un año válido. Debe ser entre 1800 y ${currentYear}`)
    }
    })

    // Eliminar película
    const buttonDel = document.querySelectorAll(".button-del")
    // Capturamos todos los botones y a cada botón le pasamos el evento
    buttonDel.forEach(button => {
        button.addEventListener("click", (event) => {
            // Accedemos a la fila y la eliminamos
            event.target.closest(".row-film").remove()
        });
    })

}
renderFilms(films)

// Filtro por Título
const selectTitle = document.getElementById("search")
function filterTitle () {
    // Creamos evento para input search
    selectTitle.addEventListener("input", (event) => {
        // Capturar película buscada por el usuario
        const search = event.target.value.trim().toLowerCase()
        // Filtro si encuentra película
        const filterTitles = films.filter((film) => film.title.toLowerCase().includes(search))
        // Mostrar películas filtradas
        renderFilms(filterTitles)
    })
}
filterTitle()

// Filtro Combinado Género - Año
const genderSelect = document.getElementById("gender")
const yearInput = document.getElementById("filtYear")
function filterGenderYear (genderFilter, yearFilter) {
    // Filtra lo que cumple la condición
    return films.filter((film) =>
        // Si no está filtrado muestra todo || Muestra sólo lo filtrado
        (genderFilter === "Todos" || film.gender === genderFilter) &&
        (yearFilter === "" || film.year === Number(yearFilter))
        )
}
// Evento para filtro género
genderSelect.addEventListener("change", (event) => {
    // Valores actuales
    const filterGender = filterGenderYear(event.target.value, yearInput.value)
    // Muestra lo filtrado de género
    renderFilms(filterGender)
})

// Evento para filtro año
yearInput.addEventListener("input", (event) => {
    const filterYear = filterGenderYear(genderSelect.value, event.target.value)
    // Muestra lo filtado de año
    renderFilms(filterYear)
})