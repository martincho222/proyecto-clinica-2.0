import "bootstrap";
import "./index.scss";

var firebaseConfig = {
  apiKey: "AIzaSyC7rlTbny4mroeytOqwRciKolT6OGhijk0",
  authDomain: "prueba-validacion-d4b73.firebaseapp.com",
  databaseURL: "https://prueba-validacion-d4b73.firebaseio.com",
  projectId: "prueba-validacion-d4b73",
  storageBucket: "prueba-validacion-d4b73.appspot.com",
  messagingSenderId: "956489182896",
  appId: "1:956489182896:web:3262ee70f9cfb1e9309575"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();




let ulUsuarios = document.getElementById("ulUsuarios");
var user = firebase.auth().currentUser;

db.collection("user").onSnapshot(querySnapshot => {
  ulUsuarios.innerHTML = "";
  querySnapshot.forEach(doc => {
    
    ulUsuarios.innerHTML = `
    <li class="list-group-item"><span>Nombre</span>: ${doc.data().nombre} </li>
    <li class="list-group-item"><span>Apellido</span>: ${doc.data().apellido} </li>
    <li class="list-group-item"><span>Email</span>: ${doc.data().email} </li>
    
    `;

    // console.log(`${doc.id} => ${doc.data()}`);
  });
});



let datosObraSocial = document.getElementById("datosObraSocial");

db.collection("user").onSnapshot(querySnapshot => {
  datosObraSocial.innerHTML = "";
querySnapshot.forEach(doc => {
    datosObraSocial.innerHTML = `
  <li class="list-group-item"><span>Obra Social</span>: ${doc.data().ObraSocial}</li>
  <li class="list-group-item"><span>N°. Obra Social</span>: ${doc.data().ObraSocialN}</li>
  <li class="list-group-item"><span>Ordenes Autorizadas</span>: ${doc.data().OrdenesAprob}</li>

`;
    

    // console.log(`${doc.id} => ${doc.data()}`);
  });
});

//Historia clinica

let collapseOne = document.getElementById('collapseOne');

db.collection("user").onSnapshot(querySnapshot => {
  collapseOne.innerHTML = "";
  querySnapshot.forEach(doc => {
    collapseOne.innerHTML = `
    <div class="card-body">${doc.data().historia}</div>
    
    `;

    // console.log(`${doc.id} => ${doc.data()}`);
  });
});

// var user = firebase.auth().currentUser;

// user.updateProfile({
//   displayName: "Jane Q. User",
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
// }).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });

//DESCONECTAR AL USUARIO

document.getElementById('desconectar').addEventListener('click', ()=>{
  alert('estas seguro que deseas desconectarte?')
  location.href = "index.html";
})

