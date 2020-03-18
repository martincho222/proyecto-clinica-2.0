//objeto turno
let turnos="";

class Turno{
    constructor(descripcion,especialidad,medico,fecha,hora){
        this.descripcion=descripcion;
        this.especialidad=especialidad;
        this.medico=medico;
        this.fecha=fecha;
        this.hora=hora;
    }
}






formularioTurnos();

function formularioTurnos() {
    const formulario = document.getElementById("formulario")
    formulario.addEventListener('submit',agregarTurno);
    document.addEventListener('DOMContentLoaded', localstorageListo);
    
}

function agregarTurno(e) {
    e.preventDefault();
//     // capturar mensaje de turno
    const medico=document.getElementById('doctores').value;
    const Turnostext=document.getElementById('descripcionTurno').value;
    const turnoEspe=document.getElementById('especialidades').value;
    const turnoFech=document.getElementById('fecha').value;
    const turnoHor=document.getElementById('hora').value;
   
    
    const turnoObjet=new Turno(Turnostext,turnoEspe,medico,turnoFech,turnoHor);

    
  
    agregarLocalStorage(turnoObjet);
console.log(turnoObjet)
    document.getElementById('descripcionTurno').value="";
    
    
};
// mostrar turnos del localstorage
function localstorageListo() {
    let turnos;
    turnos=obtenerTurnosLocalStorage();
   
    
}

function agregarLocalStorage(turnoObjet) {
    let turnos;
    turnos= obtenerTurnosLocalStorage();

// anadir el nuevo turno
turnos.push(turnoObjet);
// reescribir al local storege
localStorage.setItem('ListaTurnos',JSON.stringify(turnos))

    }



    
   
    
    


function obtenerTurnosLocalStorage() {
    let turnos;
    // revisamos si hay datos en el local storage
    if(localStorage.getItem('ListaTurnos')===null){
        turnos=[];
    }else{
        turnos=JSON.parse(localStorage.getItem('ListaTurnos'));
    }
    return turnos;
}
function mostrarDatos(i) {
    let turnoAcep=JSON.parse(localStorage.getItem('turnoAceptado'));
    let turno=turnoAcep[i] 
    document.getElementById("modal-body").innerHTML=turno.descripcion;
    
}

function mostrarTurnosAceptados() {
   let turnoAcep=JSON.parse(localStorage.getItem('turnoAceptado')) ; 
   turnoAcep.forEach((turno,i) => {

    // busco el lugar donde se ubica en el html
    const liHtml=document.getElementById('cuerpoTurnos2');
    // pongo los turnos en el Html
    liHtml.innerHTML+=`<li class="fadeInLeft animated">${turno.fecha} y ${turno.hora}<button type="button" class="btn btn-primary" onClick="mostrarDatos(${i})" data-toggle="modal" data-target="#exampleModal">
    🔶for
  </button></li>`;
    });
    
};

document.addEventListener("DOMContentLoaded", mostrarTurnosAceptados);