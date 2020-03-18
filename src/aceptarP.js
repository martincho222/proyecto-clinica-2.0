var db = firebase.firestore();


let arra1 = [];
let arrayDatos = [];
let array3 = [];
let idUser;
let Tbody = document.getElementById('Tbody');

document.addEventListener('click', function (e) {

    if (e.toElement.parentNode.id === 'btnElim') {

        let idUser = e.toElement.parentNode.parentNode.parentNode.cells["0"].innerText;
        console.log(idUser)
        let pes = e.toElement.parentNode.parentNode.parentNode;
        pes.remove();

    } else if (e.toElement.id === 'btnElim') {
        let pas = e.toElement.parentNode.parentNode;
        pas.remove();
        let idUser = e.toElement.parentNode.parentNode.cells["0"].innerText;
        console.log(idUser)
    }

});



function acept(id, nombre, apellido, email) {


    arra1.push(usuario = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        email: email,
    });
    localStorage.setItem('pacientesAct', JSON.stringify(arra1));
    arra1.forEach((pacient, i) => {
        if (id === pacient.id) {
            console.log(arrayDatos)
            arrayDatos.splice(i, 1)
            console.log(arrayDatos)

        }
    })

    mostrarPacAct();

}








function borrarPas(id) {
    idUser = id;
}

function borrarP() {
    db.collection("user").doc(idUser).delete().then(function () {
        console.log("document borrado");
    }).catch(function (error) {
        console.error("error removing document :", error);
    })
}



function mostrarPacAct() {
    let UsuariosPacientes = JSON.parse(localStorage.getItem('pacientesAct'));
    arra1 = UsuariosPacientes;

    const activos = document.getElementById('activos');

    UsuariosPacientes.forEach((usuario, i) => {
        activos.innerHTML += `
        
         <tr>
                     <th >${usuario.id}</th>
                     <td>${usuario.nombre}</td>
                    <td>${usuario.apellido}</td>
                     <td>${usuario.email}</td>  

                  </tr>
    
       `;


    });

}



function DatosDeFirebAarray() {

    db.collection("user").onSnapshot(querySnapshot => {

        querySnapshot.forEach(doc => {
            arrayDatos.push(dataUser = {
                id: doc.id,
                nombre: doc.data().nombre,
                apellido: doc.data().apellido,
                email: doc.data().email,
            });


        })

        localStorage.setItem('PacientesEspera', JSON.stringify(arrayDatos));

    });

}

function DatosPac() {
    let pasas = JSON.parse(localStorage.getItem('PacientesEspera'));
    array3.push(pasas)

    Tbody.innerHTML = "";
    array3.forEach(usua => {
        usua.forEach(usuar => {
            Tbody.innerHTML += `
            
                <tr>
                            <th >${usuar.id}</th>
                            <td>${usuar.nombre}</td>
                            <td>${usuar.apellido}</td>
                            <td>${usuar.email}</td>
                            <td>
                                <button  type="button" class="btn btn-success" data-toggle="modal" data-target="#exitoModal" id="btnElim" onclick="acept('${usuar.id}','${usuar.nombre}','${usuar.apellido}','${usuar.email}')"><i class="far fa-check-circle"></i></button>
                               <button type="button" class="btn btn-danger" onclick="borrarPas('${usuar.id}')" data-toggle="modal" data-target="#deleteModal"><i class="far fa-trash-alt"></i></button>
                            </td>
                            
        
                          </tr>
                
                
                
                `
        })


    })

}
DatosPac();
DatosDeFirebAarray();
mostrarPacAct();

