// import 'bootstrap';
// import './index.scss';

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});	

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// FIN DEL JS PARA EL LOGIN Y REGISTRO DE ADMINISTRADOR.-
  

var db = firebase.firestore();
  

	// registro de nuevos usuarios
	let nombres,
	 apellidos,
	 email,
	 password,
	 matriculaProf,
	 profesion;

const Registro ={
	nombre: [],
	apellido: [],
	email: [],
	contraseña: [],
	matricula: [],
	profesion: []
}

document.getElementById('registroAdmin')
	.addEventListener('click', ()=>{

		 nombres = document.getElementById('nombresAdm').value;
		 apellidos = document.getElementById('apellidosAdm').value;
		 email = document.getElementById('emailAdm').value;
		 password = document.getElementById('passwordAdm').value;
		 matriculaProf = document.getElementById('matriculaProfAdm').value;
		 profesion = document.getElementById('profesionAdm').value;
	
		Registro.nombre.push(nombres);
		Registro.apellido.push(apellidos);
		Registro.email.push(email);
		Registro.contraseña.push(password);
		Registro.matricula.push(matriculaProf);
		Registro.profesion.push(profesion);

		console.log(Registro.nombre)

		firebase.auth().createUserWithEmailAndPassword(email, password)
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// alert.innerHTML = `
			// 	<span class="alert alert-success">${errorCode}</span>
			
			// `;
			console.log(errorCode);
			console.log(errorMessage);
		  });

		  db.collection("admin").add({
			nombre: nombres,
			apellido: apellidos,
			email: email,
			password: password,
			matricula: matriculaProf,
			especialidad: profesion,
			historia: "",
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
		
	})




function logear(){
	
	let userAdmin = document.getElementById('adminEmail').value;
	let userPass = document.getElementById('adminPassword').value;
        // console.log('presionando');
	// if (userAdmin === email  && userPass === password){ 
	// 		document.formAdmin.submit(); 
	// 		firebase.auth().signInWithEmailAndPassword(userAdmin, userPass)
	// 		.catch(function(error) {
	// 			// Handle Errors here.
	// 			var errorCode = error.code;
	// 			var errorMessage = error.message;
	// 			debugger;
	// 			console.log(errorCode);
	// 			console.log(errorMessage);
	// 			...
	// 			document.getElementById('inicioSesion').value;
	// 	  });
	// 	} 
	// 	else{ 
	// 		 alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
	// 	} 
	firebase.auth().signInWithEmailAndPassword(userAdmin, userPass).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...
		console.log(errorCode);
		console.log(errorMessage);
	  });

	  observador ();

	} 
	
	var contenido = document.getElementById('contenido');
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
		  contenido.style.setProperty('color', '#2daf18')
		  contenido.innerHTML = `Usuario Registrado`
			location.href = "adm.html"
		  // ...
		//   localStorage.clear();
		} else {
		  // User is signed out.
		  console.log('no existe usuario activo');
		  contenido.style.setProperty('color', '#f81321')
		  contenido.innerHTML = `Usuario no Registrado`;
		  // ...
		}
		
	  });
}

// var contenido = document.getElementById('contenido');
// function ingresarDatos(){
	
// 	contenido.innerHTML = `	estas registrado`

// }





// db.collection("admin").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
// 		console.log(`${doc.id} => ${doc.data().nombre}`);
		
//     });
// });