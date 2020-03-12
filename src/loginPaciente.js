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
    historia: '',
    ObraSocial: '',
    ObraSocialN: '',
    OrdenesAprob: '' 
    
    
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
       
        // console.log("usuario si esta logueado y puede ingresar");
        
        observador ();
}

function observador (){
	console.log('verificando');
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log('existe usuario activo');
			// ingresarDatos();
			
			// redireccionar();
		  // User is signed in.
		  var displayName = user.displayName;
		  var email = user.email;
		  var emailVerified = user.emailVerified;
		  var photoURL = user.photoURL;
		  var isAnonymous = user.isAnonymous;
		  var uid = user.uid;
		  var providerData = user.providerData;
		  
			location.href = "seccionUsuario.html"
		  // ...
		//   localStorage.clear();
		} else {
		  // User is signed out.
		  console.log('no existe usuario activo');
		  // ...
		}
		
	  });
}