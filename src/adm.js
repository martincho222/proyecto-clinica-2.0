import 'bootstrap';
import './index.scss';
import 'jquery';
import 'simplebar';
import 'chart.js';
import 'izimodal';

GridStack.init();

/* Charts */
var chartConsultas = document.getElementById('chart-consultas').getContext('2d');
var chartTurnos = document.getElementById('chart-turnos').getContext('2d');

Chart.defaults.global.defaultFontFamily = "montserrat";
Chart.defaults.global.defaultFontStyle;

var graphConsultasData = new Chart(chartConsultas, {
    type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
            label: 'Consultas Recibidas',
            data: [3, 5, 8, 17, 13, 15, 11],
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
            data: [5, 9, 6, 14, 6, 17, 12],
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
let inputTask = document.getElementById("input-task");
let notCompBox = document.getElementById("notcomp-box");
let compBox = document.getElementById("comp-box");

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
