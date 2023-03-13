import contactos from "./personajes.js";
const btnBuscar = document.getElementById("buscar");
const btnAgregar = document.getElementById("agregar");
const inputNombre = document.getElementById("nombre");
const inputCriterio = document.getElementById("criterios");
const imagen = document.getElementById("imagen");
const personajes = document.querySelector(".personajes");
const resultados = document.querySelector(".resultados");
let personas = "";

function cargarFotosPersonajes() {
  personas.forEach((contacto) => {
    personajes.innerHTML += `       
        <img src="${contacto.foto}" alt=""/>
    `;
  });
}


if (localStorage.getItem("contactos") != null) {
  personas = JSON.parse(localStorage.getItem("contactos"));
} else {
  personas = contactos;
}

function buscarPersonajes() {
  resultados.innerHTML ="";
  let personajeEncontrado = personas.find(
    (personaje) =>
      personaje.nombre.toUpperCase() === inputNombre.value.toUpperCase()
  );
  if (personajeEncontrado) {
    inputNombre.value = personajeEncontrado.nombre;
    imagen.src = personajeEncontrado.foto;
    if (inputCriterio.value === "nombre") {
      resultados.innerHTML += `       
      <h3>Nombre: ${personajeEncontrado.nombre}</h3>
    `;
    }
    else if (inputCriterio.value === "apellido"){
      resultados.innerHTML += `       
      <h3>Apellido: ${personajeEncontrado.apellido}</h3>
    `;
    }    else if (inputCriterio.value === "cel"){
      resultados.innerHTML += `       
      <h3>Cel: ${personajeEncontrado.numero}</h3>
    `;
    }
    else if (inputCriterio.value === "gustos"){
      resultados.innerHTML += `       
      <h3>Gustos: ${personajeEncontrado.gustos}</h3>
    `;
    }
    else{
      resultados.innerHTML += `       
      <h3>Nombre: ${personajeEncontrado.nombre}<br>
      Apellido: ${personajeEncontrado.apellido}<br>
      Cel: ${personajeEncontrado.numero}<br>
      Gustos: ${personajeEncontrado.gustos}</h3>
    `;
    }
  } else {
    resultados.innerHTML += `       
   <h3>El personaje ${inputNombre.value} no fue encontrado.</h3>
`;
  }
}

btnAgregar.addEventListener("click", () => {
  window.location.href = "./HTML/registro.html";
});

btnBuscar.addEventListener("click", () => {
  buscarPersonajes();
});

inputNombre.addEventListener("focus", function () {
  inputNombre.value = "";
  inputCriterio.value = "todos";
  imagen.src = "./images/anonimo.png";
  resultados.innerHTML = "";
});

cargarFotosPersonajes();
