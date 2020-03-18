let turnos;
class Turno{
    constructor(descripcion,especialidad,medico,fecha,hora){
        this.descripcion=descripcion;
        this.especialidad=especialidad;
        this.medico=medico;
        this.fecha=fecha;
        this.hora=hora;
    }
}
function obtenerTurnosLocalStorage() {
    let turnos;
    // revisamos si hay datos en el local storage
    if(localStorage.getItem('ListaTurnos')===null){
        turnos=[];
        console.log(turnos)
    }else{
        turnos=JSON.parse(localStorage.getItem('ListaTurnos'));
        console.log(turnos)
    }
    return turnos;

    
}
function localstorageListo() {
    let turnos;
    turnos=obtenerTurnosLocalStorage();
    turnos.forEach(turno => {
        
    // busco el lugar donde se ubica en el html
    const liHtml=document.getElementById('cuerpoTurnos');
    // pongo los turnos en el Html
    liHtml.innerHTML+=`<li class="fadeInLeft animated"> <i class="far fa-calendar-alt"></i> Motivo de turno: ${turno.descripcion}, <br> el dia:  ${turno.fecha}, <br> a las  ${turno.hora} <br><button class="btn btn-danger m-3" id="denegarTurno">✖</button><button class="btn btn-success m-3" id="aceptarTurno">✔</button> </li>`;
        console.log(turno)
        
    });
    
}
function denegarTurno(e) {
    console.log(e);
    let btn=e.toElement.parentElement;
    btn.remove();
    let listaTurnos=JSON.parse(localStorage.getItem('ListaTurnos'));
    listaTurnos.forEach((element,i)=>{
        console.log(element,i)
        if(e.toElement.parentNode.firstChild.data===element.descripcion){
            listaTurnos.splice(i,1);
            
        }
        
    })
    console.log(listaTurnos)
    localStorage.setItem('ListaTurnos',JSON.stringify(listaTurnos));
    console.log(listaTurnos)

}
function aceptarTurno(e) {
    let turnoAcep;
    // revisamos si hay datos en el local storage
    if(localStorage.getItem('turnoAceptado')===null){
        turnoAcep=[];
    
    }else{
        turnoAcep=JSON.parse(localStorage.getItem('turnoAceptado'));
        
    };
    


    let listaTurnos=JSON.parse(localStorage.getItem('ListaTurnos'));

    listaTurnos.forEach((element,i)=>{
        if(e.toElement.parentNode.firstChild.data===element.descripcion){
            listaTurnos.splice(i,1);
            turnoAcep.push(element)
        }
        
    })
    
    localStorage.setItem('turnoAceptado',JSON.stringify(turnoAcep));
    localStorage.setItem('ListaTurnos',JSON.stringify(listaTurnos));

    let btn=e.toElement.parentElement;
    btn.remove();
    
 
        
   


    
};



obtenerTurnosLocalStorage();
localstorageListo();

const btnDenegarTurno=document.querySelectorAll("#denegarTurno");
btnDenegarTurno.forEach(function(userItem) {
    let btn=userItem;
    btn.addEventListener("click",denegarTurno)
    
  });

 
 
  const btnAceptarTurno=document.querySelectorAll("#aceptarTurno");
btnAceptarTurno.forEach(function (userItem) {
    let btn=userItem;
    btn.addEventListener("click",aceptarTurno)
    
});

