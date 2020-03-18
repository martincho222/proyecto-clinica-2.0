/* Notifications */
let nuevo=JSON.parse(localStorage.getItem('turnoAceptado'));

/* Turnos Nuevos */
let cantidadTurnos =[]; /* Conexion con los turnos recibidos */
    cantidadTurnos.push(nuevo.length)
function NotificarTurnos() {
    let totalTurnos = 0;
    for (let i = 0; i < cantidadTurnos.length; i++) {
        totalTurnos += cantidadTurnos[i];
    }
    turnosNuevosText.innerHTML = totalTurnos;
}

NotificarTurnos();


/* Consultas Nuevas */
let cantidadConsultas = [3, 2, 8, 7, 13, 15, 11]; /* Conexion con las consultar recibidas */

function NotificarConsultas() {
    let totalConsultas = 0;
    for (let i = 0; i < cantidadConsultas.length; i++) {
        totalConsultas += cantidadConsultas[i];
    }
    consultasNuevasText.innerHTML = totalConsultas;
}

NotificarConsultas();

/* Actividades Nuevas */
let cantidadActividades = [6,1,8]; /* Conexion con las actividades */

function NotificarActividades() {
    let totalActividades = 0;
    for (let i = 0; i < cantidadActividades.length; i++) {
        totalActividades += cantidadActividades[i];
    }
    actividadesNuevasText.innerHTML = totalActividades;
}

NotificarActividades();

nuevo.forEach(element => {
   

    let turnoTest = new Turno(element.fecha, element.hora, element.descripcion);

moduloEventos.innerHTML += turnoTest.htmlCard;
});/* Generate Event Card */