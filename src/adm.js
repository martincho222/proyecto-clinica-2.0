import 'bootstrap';
import './index.scss';
import 'jquery';
import 'simplebar';
import 'chart.js';

GridStack.init();

/* Charts */
var chart1 = document.getElementById('myChart1').getContext('2d');
var chart2 = document.getElementById('myChart2').getContext('2d');

var myChart = new Chart(chart1, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderWidth: 1
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

var myChart2 = new Chart(chart2, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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
let compBox = document.getElementById("compBox");

inputTask.addEventListener("keyup", function (e) {
    if (e.keyCode === 13 && inputTask.value != "") {
        let compIcon = document.createElement("i");
        compIcon.className = "task-icon fas fa-check";
        let trashIcon = document.createElement("i");
        trashIcon.className = "task-icon fas fa-trash-alt"
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

        compIcon.addEventListener("click", function(){
            var p = $(this).parent();
            p.fadeOut(function () {
                p.remove();
            });
        });

        notCompBox.append(tarea);
        inputTask.value = "";
    }
});
