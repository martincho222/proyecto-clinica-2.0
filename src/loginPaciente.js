var log = document.getElementById("login");
var registro = document.getElementById("registro");
var btn = document.getElementById("btn");
function registro(){
    log.style.left= "-400px";
    registro.style.left="50px";
    btn.style.left="110px";
}
function login(){
    log.style.left= "50px";
    registro.style.left="450px";
    btn.style.left="0";
}