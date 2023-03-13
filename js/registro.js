import contactos from "./personajes.js";
const btnAgregar = document.getElementById("agregar");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputNumero = document.getElementById("numero");
const inputGustos = document.getElementById("gustos");
const urlFoto = document.getElementById("foto");
const imagen = document.getElementById("img-preview");

urlFoto.addEventListener('input', () => {
  imagen.src = urlFoto.value;
  console.log("cargue esa imagen ome", urlFoto.value);
});


let contactoPersonas=""
btnAgregar.addEventListener("click", () => {
  if(localStorage.getItem("contactos")==null){
    contactoPersonas=[...contactos]
  }else{
    contactoPersonas=JSON.parse(localStorage.getItem("contactos"));
  }
  let misGustos=(gustos.value).split(",");
  contactoPersonas.push({nombre:nombre.value,apellido:apellido.value,numero:numero.value,gustos:misGustos,foto:urlFoto.value});
  localStorage.setItem("contactos",JSON.stringify(contactoPersonas));
  setTimeout(()=>{
    location="../index.html"});
  })
