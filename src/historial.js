var db = firebase.firestore();

const tabla = document.getElementById("tabla");
const historial = document.getElementById("historial");
const nombrePaciente = document.getElementById("nombrePaciente");
const apellidoPaciente = document.getElementById("apellidoPaciente");
const datosObraSocial = document.getElementById("datosObraSocial");


//LEER DATOS DE LA BASE FIRESTORE
//<th class="text-center" scope="row">${doc.id}</th>
db.collection("user").onSnapshot(querySnapshot => {
  tabla.innerHTML = "";
  querySnapshot.forEach(doc => {
    tabla.innerHTML += `
        <tr>
                <td class="text-center">${doc.data().nombre}</td>
                <td class="text-center">${doc.data().apellido}</td>
                <td class="text-center">${doc.data().email}</td>
            <th class="d-flex justify-content-around" scope="row">
                <button class="btn btn-primary" onclick="agregarHistoriaClinica('${doc.id}', '${doc.data().nombre}', '${doc.data().apellido}','${doc.data().email}' )">agregar</button>
                <button class="btn btn-success" onclick="modificarHistoriaClinica('${doc.id}', '${doc.data().nombre}', '${doc.data().apellido}','${doc.data().email}', '${doc.data().historia}')">modificar</button>
                <button class="btn btn-warning" onclick="guardarDatosOB('${doc.id}', '${doc.data().ObraSocial}','${doc.data().ObraSocialN}', '${doc.data().OrdenesAprob}')">Obra Social</button>
            </th>

        </tr>
    `;

    // console.log(`${doc.id} => ${doc.data()}`);
  });
});

//AGREGAR HISTORIA CLINICA
console.profile('prueba')
function agregarHistoriaClinica(id, nombre, apellido, email) {
  if (historial !== "") {
    historial.innerHTML = `
        <h2 class="mb-3 pb-3 mt-3 pt-3 text-center">Historia Clinica</h2>
        <form>
            <div class="form-group">
                <label for="disabledTextInput">Nombre</label>
                <input type="text" class="form-control" id="nombrePaciente"
                    placeholder="${nombre}" disabled>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Apellido</label>
                <input type="text" class="form-control" id="apellidoPaciente"
                    placeholder="${apellido}" disabled>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Apellido</label>
                <input type="text" class="form-control" id="emailPaciente"
                    placeholder="${email}" disabled>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Historia Clinica</label>
                <textarea class="form-control" id="historiaClinica" rows="3"></textarea>
            </div>
            <button class="btn btn-primary" type="button" id="guardarHistoria">Guardar</button>
            <button class="btn btn-danger" type="button" id="cerrarAgregarHistoria">x</button>
        </form>
        `;

    document.getElementById("guardarHistoria").addEventListener("click", () => {
      let historiaClinica = document.getElementById("historiaClinica").value;

      console.log(historiaClinica);
      var washingtonRef = db.collection("user").doc(id);
      // Set the new updates
      return washingtonRef
        .update({
          historia: historiaClinica
        })
        .then(function() {
          console.log("Document successfully updated!");
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    });
  } else {
    historial.innerHTML = "";
  }
  //Cerrar ventana

  document
    .getElementById("cerrarAgregarHistoria")
    .addEventListener("click", e => {
      e.preventDefault();
      historial.innerHTML = "";
    });
}
console.profileEnd('prueba')
//MODIFICAR HISTORIA CLINICA
function modificarHistoriaClinica(id, nombre, apellido, email, historia) {
  if (historial !== "") {
    historial.innerHTML = `
    

        <h2 class="mb-3 pb-3 mt-3 pt-3 text-center">Historia Clinica</h2>
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Nombre</label>
                <input type="text" class="form-control" id="nombrePaciente1"
                    placeholder="">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Apellido</label>
                <input type="text" class="form-control" id="apellidoPaciente1"
                    placeholder="">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Historia Clinica</label>
                <textarea class="form-control" id="historiaClinica1" rows="3"></textarea>
            </div>
            <button class="btn btn-primary" id="modificarHistoria">Editar</button>
            <button class="btn btn-danger" type="button" id="cerrarModificarHistoria">x</button>
        </form>
        `;

    document.getElementById("nombrePaciente1").value = nombre;
    document.getElementById("apellidoPaciente1").value = apellido;
    document.getElementById("historiaClinica1").value = historia;

    document
      .getElementById("modificarHistoria")
      .addEventListener("click", e => {
        e.preventDefault();
        var washingtonRef = db.collection("user").doc(id);
        // Set the new updates
        let nombre = document.getElementById("nombrePaciente1").value;
        let apellido = document.getElementById("apellidoPaciente1").value;
        let historiaClinica = document.getElementById("historiaClinica1").value;

        return washingtonRef
          .update({
            nombre: nombre,
            apellido: apellido,
            historia: historiaClinica
          })
          .then(function() {
            console.log("Document successfully updated!");
          })
          .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      });
  } else {
    historial.innerHTML = "";
  }
  //cerrar ventana
  document
    .getElementById("cerrarModificarHistoria")
    .addEventListener("click", e => {
      e.preventDefault();
      historial.innerHTML = "";
    });
}

//Agredar Datos de Obra Social

function guardarDatosOB(id, obra, numero, ordenes) {
  if (datosObraSocial !== "") {
    datosObraSocial.innerHTML = `
        <h2 class="mb-3 pb-3 mt-3 pt-3 text-center">Datos Obra Social</h2>
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Obra Social</label>
                <input type="text" class="form-control" id="obraSocial"
                    placeholder="Nombre Obra Social">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">N° Obra Social</label>
                <input type="text" class="form-control" id="NobraSocial"
                    placeholder="N° Obra Social">
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Ordenes Aprobadas</label>
                <input type="number" class="form-control" id="ordenesAprobadas"
                    placeholder="Cantidad">
            </div>
            <br>
            <br>

            <button class="btn btn-primary" type="button" id="guardarDatosOB">Guardar</button>
            <button class="btn btn-danger" type="button" id="cerrarGuardarDatosOB">X</button>
        </form>
        `;

    document.getElementById("guardarDatosOB").addEventListener("click", e => {
      e.preventDefault();
      let obraSocial = document.getElementById("obraSocial").value;
      let NobraSocial = document.getElementById("NobraSocial").value;
      let ordenesAprobadas = document.getElementById("ordenesAprobadas").value;

      var washingtonRef = db.collection("user").doc(id);
      // Set the new updates
      return washingtonRef
        .update({
          ObraSocial: obraSocial,
          ObraSocialN: NobraSocial,
          OrdenesAprob: ordenesAprobadas
        })
        .then(function() {
          console.log("Document successfully updated!");
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    });
  } else {
    datosObraSocial.innerHTML = "";
  }
  //cerrar ventana
  document
    .getElementById("cerrarGuardarDatosOB")
    .addEventListener("click", () => {
      datosObraSocial.innerHTML = "";
    });
}

//BORRAR PACIENTES
/* <button class="btn btn-danger" onclick="borrarPaciente('${doc.id}')">Borrar</button>
function borrarPaciente(id){
  db.collection("user").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });

} */
