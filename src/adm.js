import 'bootstrap';
import './index.scss';
import 'jquery';
import 'simplebar';
import 'chart.js';
import 'izimodal';

GridStack.init();

/* Charts */
let chartConsultas = document.getElementById('chart-consultas').getContext('2d');
let chartTurnos = document.getElementById('chart-turnos').getContext('2d');

Chart.defaults.global.defaultFontFamily = "montserrat";

var graphConsultasData = new Chart(chartConsultas, {
    type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
            label: 'Consultas Recibidas',
            data: cantidadConsultas,
            backgroundColor: [
                'rgba(52, 152, 219, 0.7)',
            ],
            borderColor: [
                'rgba(41, 128, 185, 0.9)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var graphTurnosData = new Chart(chartTurnos, {
    type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
            label: 'Turnos Recibidos',
            data: cantidadTurnos,
            backgroundColor: [
                'rgba(26, 188, 156, 0.7)',
            ],
            borderColor: [
                'rgba(22, 160, 133, 0.9)',
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

/* Charts End */

/* Tareas Lista */

inputTask.addEventListener("keyup", function (e) {
    if (e.keyCode === 13 && inputTask.value != "") {
        let compIconHTML = "<i class='task-icon fas fa-check'></i>";
        let trashIconHTML = "<i class='task-icon fas fa-trash-alt'></i>";

        let compIcon = document.createElement("div");
        let trashIcon = document.createElement("div");

        trashIcon.innerHTML = trashIconHTML;
        compIcon.innerHTML = compIconHTML;

        let tarea = document.createElement("div");
        tarea.className = "task";

        tarea.innerHTML = inputTask.value;

        tarea.append(trashIcon);
        tarea.append(compIcon);


        trashIcon.addEventListener("click", function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                p.remove();
            });

        });

        compIcon.addEventListener("click", function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                compBox.append(tarea);
                p.fadeIn();
            });
            $(this).remove();
        });

        notCompBox.append(tarea);
        inputTask.value = "";
    }
});

/* End Tareas Lista */

/* SideBar Function */
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $("#dismiss, .overlay").on("click", function () {
        $("#sidebar").removeClass("active");
        $(".overlay").removeClass("active");
    });

    $("#sidebarCollapse").on("click", function () {
        $("#sidebar").addClass("active");
        $(".overlay").addClass("active");
        $(".collapse.in").toggleClass("in");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
    });
});