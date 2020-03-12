var db = firebase.firestore();

function registrar(){
 let email = document.getElementById('email').value;
 let nombre = document.getElementById('nombre').value;
 let apellido = document.getElementById('apellido').value;
 let contrasena = document.getElementById('contrasena').value;

 firebase.auth().createUserWithEmailAndPassword(email, contrasena).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });

  db.collection("user").add({
    nombre: nombre,
    apellido: apellido,
    email: email,
    password: contrasena,
    historia: ''
    
    
    })
    .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
    console.error("Error adding document: ", error);
    });


  document.getElementById('email').value = "";
  document.getElementById('nombre').value ="";
  document.getElementById('apellido').value ="";
  document.getElementById('contrasena').value ="";

  

}

function logIn(){
    let email2 = document.getElementById('email2').value;
    let contra2 = document.getElementById('contra2').value;

    firebase.auth().signInWithEmailAndPassword(email2, contra2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
        console.log("usuario si esta logueado y puede ingresar");

      
}