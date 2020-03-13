import "bootstrap";
import "./index.scss";

let datos = {
  nombre: [martin],
  apellido: [],
  documento: [],
  fechNac: [],
  edad: [],
  obraSoc: []
};

let ulUsuarios = document.getElementById("ulUsuarios");

let datosPaciente = () => {
  ulUsuarios.innerHTML = "";

  ulUsuarios.innerHTML = `
    <li class="list-group-item">Nombre: ${datos.nombre} </li>
    <li class="list-group-item">Apellido: ${apellido} </li>
    <li class="list-group-item">Documento: ${documento} </li>
    <li class="list-group-item">Fecha de Nacimiento: ${fechNac}</li>
    <li class="list-group-item">Edad: ${edad}</li> 
    `;
};
datosPacientes();

let datosObraSocial = document.getElementById("datosObraSocial");

let obraSocial = () => {
  datosObraSocial.innerHTML = `
    <li class="list-group-item">Obra Social: Red de Seguros Medicos</li>
    <li class="list-group-item">N°. Obra Social: 654987654231</li>
    <li class="list-group-item">Ordenes Autorizadas: 10</li>
    
    `;
};
