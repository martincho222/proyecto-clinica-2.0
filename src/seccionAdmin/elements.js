/* Notifications */
let consultasNuevasText = document.getElementById("notif-consultas-nuevas");
let turnosNuevosText = document.getElementById("notif-turnos-nuevos");
let actividadesNuevasText = document.getElementById("notif-actividades-nuevas");

/* Charts */


/* Tareas List */
let inputTask = document.getElementById("input-task");
let notCompBox = document.getElementById("notcomp-box");
let compBox = document.getElementById("comp-box");

/* Events List */
let moduloEventos = document.getElementById("modulo-eventos");

/* Events Object */
class Turno {
    constructor(fecha, hora, descripcion) {
        this.fecha = fecha;
        this.hora = hora;
        this.descripcion = descripcion;

        this.htmlCard = `<div class="event modulo rounded row
        mt-2">
    <div class="event-date col-3
            d-flex
            align-items-center
            justify-content-center">
        <div class="d-block">
            <h4 class="event-date-day
                    mb-2 mt-2">
                    `+ this.hora + ` Hs
                    </h4>
            <h6 class="event-date-month
                    mt-0">
                    ` + this.fecha + `
                    </h6>
        </div>
    </div>
    <div class="event-content row
            col-9
            d-block">
        <div class="event-title
                d-flex">
            <h6 class="mt-2 ml-3">Turno</h6>
        </div>
        <div class="event-description">
            <p class="ml-2 mt-2">
            `+ this.descripcion + `
            </p>
        </div>
    </div>
</div>`;
    }
}
