// import 'bootstrap';
// import './index.scss';

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// INICIO LOGIN Y REGISTRO DE ADMINISTRADOR.-

var db = firebase.firestore();

// registro de nuevos usuarios
let nombres, apellidos, email, password, matriculaProf, profesion;

// const email2 = 'lala@kalima.com.ar';

document
  .getElementById("formAdmin")
  .addEventListener("submit", validarRegistroAdmin);

function validarRegistroAdmin(e) {
  e.preventDefault();
  nombres = document.getElementById("nombresAdm").value;
  apellidos = document.getElementById("apellidosAdm").value;
  email = document.getElementById("emailAdm").value;
  password = document.getElementById("passwordAdm").value;
  matriculaProf = document.getElementById("matriculaProfAdm").value;
  profesion = document.getElementById("profesionAdm").value;
  const isValidEmail = /(\w+)@kalima.com.ar/gi.test(email);
  if (isValidEmail) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
      });

    db.collection("admin")
      .add({
        nombre: nombres,
        apellido: apellidos,
        email: email,
        password: password,
        matricula: matriculaProf,
        especialidad: profesion,
        historia: ""
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })

      .catch(function(error) {
        // console.error("Error adding document: ", error);
      });
  } else {
    //   console.log('email no valido');
  }
  document.getElementById("nombresAdm").value = "";
  document.getElementById("apellidosAdm").value = "";
  document.getElementById("emailAdm").value = "";
  document.getElementById("passwordAdm").value = "";
  document.getElementById("matriculaProfAdm").value = "";
  document.getElementById("profesionAdm").value = "";
}

function logear() {
  let userAdmin = document.getElementById("adminEmail").value;
  let userPass = document.getElementById("adminPassword").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(userAdmin, userPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });

  observador();
}

var contenido = document.getElementById("contenido");
function observador() {
  console.log("verificando");
  firebase.auth().onAuthStateChanged(function(admin) {
    if (admin) {
      console.log("existe usuario activo");
      // ingresarDatos();

      // redireccionar();
      // User is signed in.
      var displayName = admin.displayName;
      var email = admin.email;
      var emailVerified = admin.emailVerified;
      var photoURL = admin.photoURL;
      var isAnonymous = admin.isAnonymous;
      var uid = admin.uid;
      var providerData = admin.providerData;
      contenido.style.setProperty("color", "#2daf18");
      contenido.innerHTML = `Usuario Registrado`;
      location.href = "adm.html";
      // ...
      //   localStorage.clear();
    } else {
      // User is signed out.
      console.log("no existe usuario activo");
      contenido.innerHTML = `Usuario no Registrado`;
      contenido.style.setProperty("color", "#f81321");
      
      // ...
    }
  });
}

// FIN DEL JS PARA EL LOGIN Y REGISTRO DE ADMINISTRADOR.-
