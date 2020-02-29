const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


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

		firebase.auth().createUserWithEmailAndPassword(email, password)
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		  });
		
	})

// document.getElementById('inicioSesion')
// 	.addEventListener('click', ()=>{

// 		let adminEmail = document.getElementById('adminEmail').value;
// 		let adminPassword = document.getElementById('adminPassword').value;

// 		firebase.auth().signInWithEmailAndPassword(adminEmail, adminPassword)
// 			.catch(function(error) {
// 				// Handle Errors here.
// 				var errorCode = error.code;
// 				var errorMessage = error.message;
// 				console.log(errorCode);
// 				console.log(errorMessage);
// 				// ...
// 		  });
// 	})

// FLOR AQUI ABAJO HACE LAS FUNCIONES PARA LA LOGICA, YA DESPUES LO INTEGRO CON FIREBASE