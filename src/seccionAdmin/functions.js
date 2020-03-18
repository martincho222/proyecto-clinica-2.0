/* Notifications */

/* Turnos Nuevos */
let cantidadTurnos = [5, 9, 6, 14, 8, 17, 12]; /* Conexion con los turnos recibidos */

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

/* Generate Event Card */
let turnoTest = new Turno("23", "Mar", "Inyectado por Js");

moduloEventos.innerHTML += turnoTest.htmlCard;
