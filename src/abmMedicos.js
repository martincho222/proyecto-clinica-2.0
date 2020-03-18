var db = firebase.firestore();

  //Agrega medicos y especialidades
 
  function guardar(){
      var nombre= document.getElementById('nombre').value;
      var apellido= document.getElementById('apellido').value;
      var especialidad= document.getElementById('especialidad').value;
      var matricula= document.getElementById('matricula').value;
      var email= document.getElementById('email').value;
      var password= document.getElementById('password').value;

    db.collection("admin").add({
        nombre: nombre,
        apellido: apellido,
        especialidad: especialidad,
		matricula: matricula,       
        email: email,
		password: password,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value= "";
        document.getElementById('especialidad').value= "";
        document.getElementById('matricula').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value ="";
    
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    
  }
  
  //Lee documentos
  var tabla= document.getElementById('tabla');
  db.collection("admin").onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
       // console.log(`${doc.id} => ${doc.data().nombre}`);
        tabla.innerHTML +=`
        <tr>
      <td>${doc.data().nombre}</td>
      <td>${doc.data().apellido}</td>
      <td>${doc.data().especialidad}</td>
      <td>${doc.data().matricula}</td>
      <td>${doc.data().email}</td>
      <td><button class= "btn btn-danger"onclick="eliminar('${doc.id}')"><i class="far fa-trash-alt"></i></button></td>
      <td><a href="#nombre"><button class= "btn btn-warning" onclick="editar('${doc.id}', '${doc.data().nombre}','${doc.data().apellido}','${doc.data().especialidad}','${doc.data().matricula}','${doc.data().email}','${doc.data().password}')"><i class="far fa-edit"></i></button></a></td>
      </tr>
        `
    });
});
//Borra datos

function eliminar(id, nombre, apellido, especialidad, matricula, email, password){
    db.collection("admin").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}
//Editar datos

function editar(id, nombre, apellido, especialidad, matricula, email, password){
    
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('especialidad').value = especialidad;
    document.getElementById('matricula').value = matricula;
    document.getElementById('email').value = email;
    document.getElementById('password').value = password;
    
    
    var boton = document.getElementById('boton');
    boton.innerHTML ='Editar';
    
    boton.onclick = function(){
        
        var washingtonRef = db.collection("admin").doc(id);
        // Set the "capital" field of the city 'DC'

        var nombre =  document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var especialidad = document.getElementById('especialidad').value;
        var matricula = document.getElementById('matricula').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;



        return washingtonRef.update({
                nombre: nombre,
                apellido: apellido,
                especialidad: especialidad,
		        matricula: matricula,
                email: email,
		        password: password,
        })
    
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML ='Guardar';
            boton.onclick=function(){
                guardar();
            }
            document.getElementById('nombre').value = "";
            document.getElementById('apellido').value= "";
            document.getElementById('especialidad').value= "";
            document.getElementById('matricula').value= "";
            document.getElementById('email').value= "";
            document.getElementById('password').value= "";

        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }

}

//BUSQUEDAS - FILTROS - QUERYS

//BOTON BUSCAR POR NOMBRE
function buscarNom(){
    document.getElementById('botonSearchN').style.display = 'block';
    document.getElementById('buscaN').style.display ='none';
    var botonFN= document.getElementById('filtrarN');
    botonFN.disabled = false;
    document.getElementById('cerrarFiltroN').style.display = 'block';


    }

//FILTRAR POR NOMBRE

function filtroNombre(){
    document.getElementById('filtrarN').style.display ='none';
    document.getElementById('cerrarFiltroN').style.display = 'block';
    var comparaN = document.getElementById('botonSearchN').value;
    tabla.innerHTML = "";
    db.collection("admin").where('nombre', '==',comparaN).get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
        
        tabla.innerHTML +=(`
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().apellido}</td>
        <td>${doc.data().especialidad}</td>
        <td>${doc.data().matricula}</td>
        <td>${doc.data().email}</td>
  
      <td><button class= "btn btn-danger"onclick="eliminar('${doc.id}')"><i class="far fa-trash-alt"></i></button></td>
      <td><a href="#nombre"><button class= "btn btn-warning"onclick="editar('${doc.id}', '${doc.data().nombre}','${doc.data().apellido}','${doc.data().especialidad}','${doc.data().matricula}','${doc.data().email}')"><i class="far fa-edit"></i></a></button></td>
      </tr>
        `);
    })  
    });

}

//CERRAR FILTRO Nom
var botonFN= document.getElementById('filtrarN');
var botonSN=  document.getElementById('botonSearchN');
function cerrarfiltroN(){
    document.getElementById('filtrarN').style.display ='block';
    document.getElementById('cerrarFiltroN').style.display = 'none';
    document.getElementById('botonSearchN').style.display = 'none';
    document.getElementById('buscaN').style.display ='block';
    botonFN.disabled = true;
    botonSN.value="";
    
    var tabla= document.getElementById('tabla');
  db.collection("admin").onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
       // console.log(`${doc.id} => ${doc.data().nombre}`);
        tabla.innerHTML +=`
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().apellido}</td>
        <td>${doc.data().especialidad}</td>
        <td>${doc.data().matricula}</td>
        <td>${doc.data().email}</td>
  
      <td><button class= "btn btn-danger"onclick="eliminar('${doc.id}')"><i class="far fa-trash-alt"></i></button></td>
      <td><a href="#nombre"><button class= "btn btn-warning"onclick="editar('${doc.id}', '${doc.data().nombre}','${doc.data().apellido}','${doc.data().especialidad}','${doc.data().matricula}','${doc.data().email}')"><i class="far fa-edit"></i></button></a></td>
      </tr>
        `
    });
});
}

  
//BOTON BUSCAR POR APELLIDO
function buscarApe(){
    document.getElementById('botonSearchA').style.display = 'block';
    document.getElementById('buscaA').style.display ='none';
    var botonFA= document.getElementById('filtrarA');
    botonFA.disabled = false;
    document.getElementById('cerrarFiltroA').style.display = 'block';

    
    
    }

//FILTRAR POR APELLIDO

function filtroApellido(){
    document.getElementById('filtrarA').style.display ='none';
    document.getElementById('cerrarFiltroA').style.display = 'block';
    var comparaA = document.getElementById('botonSearchA').value;
    tabla.innerHTML = "";
    db.collection("admin").where('apellido', '==',comparaA).get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
        
        tabla.innerHTML +=(`
        <tr>
      <td>${doc.data().nombre}</td>
      <td>${doc.data().apellido}</td>
      <td>${doc.data().especialidad}</td>
      <td><button class= "btn btn-danger"onclick="eliminar('${doc.id}')"><i class="far fa-trash-alt"></i></button></td>
      <td><a href="#nombre"><button class= "btn btn-warning"onclick="editar('${doc.id}', '${doc.data().nombre}','${doc.data().apellido}','${doc.data().especialidad},'${doc.data().matricula}','${doc.data().email}')"><i class="far fa-edit"></i></button></a></td>
      </tr>
        `);
    })
  
    });

}

//CERRAR FILTRO
function cerrarfiltroA(){
    document.getElementById('filtrarA').style.display ='block';
    document.getElementById('cerrarFiltroA').style.display = 'none';
    document.getElementById('botonSearchA').style.display = 'none';
    document.getElementById('buscaA').style.display ='block';
    var botonFA= document.getElementById('filtrarA');
    var botonSA=  document.getElementById('botonSearchA');
    botonFA.disabled = true;
    botonSA.value="";

    
    var tabla= document.getElementById('tabla');
  db.collection("admin").onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
       // console.log(`${doc.id} => ${doc.data().nombre}`);
        tabla.innerHTML +=`
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().apellido}</td>
        <td>${doc.data().especialidad}</td>
        <td>${doc.data().matricula}</td>
        <td>${doc.data().email}</td>
  
      <td><button class= "btn btn-danger"onclick="eliminar('${doc.id}')"><i class="far fa-trash-alt"></i></button></td>
      <td><a href="#nombre"><button class= "btn btn-warning"onclick="editar('${doc.data().nombre}','${doc.data().apellido}','${doc.data().especialidad}','${doc.data().matricula},'${doc.data().email}')"><i class="far fa-edit"></i></a></button></td>
      </tr>
        `
    });
});
}


//FILTRAR POR ESPECILIDAD

//BOTON BUSCAR POR ESPECIALIDAD
function buscarEspe(){
    document.getElementById('botonSearchE').style.display = 'block';
    document.getElementById('buscaE').style.display ='none';
    var botonFE= document.getElementById('filtrarE');
    botonFE.disabled = false;
    document.getElementById('cerrarFiltroE').style.display = 'block';
    
    }

//FILTRAR POR ESPECIALIDAD

function filtroEspecialidad(){
    document.getElementById('filtrarE').style.display ='none';
    document.getElementById('cerrarFiltroE').style.display = 'block';
    var comparaE = document.getElementById('botonSearchE').value;
    tabla.innerHTML = "";
    db.collection("admin").where('especialidad', '==',comparaE).get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
        
        tabla.innerHTML +=(`
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().apellido}</td>
        <td>${doc.data().especialidad}</td>
        <td>${doc.data().matricula}</td>
        <td>${doc.data().email}</td>
  
      <td><button class= "btn btn-danger"onclick="eliminar('${doc.id}')"><i class="far fa-trash-alt"></i></button></td>
      <td><a href="#nombre"><button class= "btn btn-warning"onclick="editar('${doc.id}', '${doc.data().nombre}','${doc.data().apellido}','${doc.data().especialidad}','${doc.data().matricula}','${doc.data().email}')"><i class="far fa-edit"></i></button></a></td>
      </tr>
        `);
    })  
    });

}

//CERRAR FILTRO ESPECIALIDAD
function cerrarfiltroE(){
    document.getElementById('filtrarE').style.display ='block';
    document.getElementById('cerrarFiltroE').style.display = 'none';
    document.getElementById('botonSearchE').style.display = 'none';
    document.getElementById('buscaE').style.display ='block';
    var botonFE= document.getElementById('filtrarE');
    var botonSE=  document.getElementById('botonSearchE');
    botonFE.disabled = true;
    botonSE.value="";
    
    var tabla= document.getElementById('tabla');
  db.collection("admin").onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
       // console.log(`${doc.id} => ${doc.data().nombre}`);
        tabla.innerHTML +=`
        <tr>
        <td>${doc.data().nombre}</td>
        <td>${doc.data().apellido}</td>
        <td>${doc.data().especialidad}</td>
        <td>${doc.data().matricula}</td>
        <td>${doc.data().email}</td>
  
      <td><button class= "btn btn-danger"onclick="eliminar('${doc.id}')"><i class="far fa-trash-alt"></i></button></td>
      <td><a href="#nombre"><button class= "btn btn-warning"onclick="editar('${doc.id}', '${doc.data().nombre}','${doc.data().apellido}','${doc.data().especialidad}','${doc.data().matricula}','${doc.data().email}')"><i class="far fa-edit"></i></button></a></td>
      </tr>
        `
    });
});
}