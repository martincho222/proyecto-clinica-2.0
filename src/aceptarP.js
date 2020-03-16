var db = firebase.firestore();

// $(document).on('click', 'btn-remove', removeElement);
// function removeElement(){
//     $(this).parent().remove();

// }
let arra1 =[];
let Tbody = document.getElementById('Tbody');
db.collection("user").onSnapshot(querySnapshot => {
    Tbody.innerHTML = "";
    querySnapshot.forEach(doc => {
        
        Tbody.innerHTML+=`
        
        <tr>
                    <th scope="row">${doc.id}</th>
                    <td>${doc.data().nombre}</td>
                    <td>${doc.data().apellido}</td>
                    <td>${doc.data().email}</td>
                    <td>
                        <button  type="button" class="btn btn-success" data-toggle="modal" data-target="#exitoModal" onclick="acept('${doc.id}','${doc.data().nombre}','${doc.data().apellido}','${doc.data().email}')"><i class="far fa-check-circle"></i></button>
                       <button type="button" class="btn btn-danger" onclick="borrarPas('${doc.id}')" data-toggle="modal" data-target="#deleteModal"><i class="far fa-trash-alt"></i></button>
                    </td>
                    

                  </tr>
        
        
        
        `

//    console.log(`${doc.id} => ${doc.data()}`);
    });
   
  });
// class User{
//     constructor(Id,Name,LastName,Email,Actions){
//         this.Id=Id;
//         this.Name=Name;
//         this.LastName=LastName;
//         this.Email=Email;
//         this.Actions=Actions;
//     }

// }


// function agregarUser() {
    // const Id=localsa
    // const Name=document.getElementById().value;
    // const Email=document.getElementById().value;
    // const LastName=document.getElementById().value;
    // const Actions=document.getElementById().value;

//     const user = new User('1','rochi','scarlata','rochi@roch','vamo');
//      const ubicHtml=document.getElementById('Tbody');
//     console.log(user);
//     ubicHtml.innerHTML +=`<tr>
//     <th scope="row">${user.Id}</th>
//     <td>${user.Name}</td>
//     <td>${user.LastName}</td>
//     <td>${user.Email}</td>
//     <td>
//         <button  type="button" class="btn btn-success" data-toggle="modal" data-target="#exitoModal" ><i class="far fa-check-circle"></i></button>
//        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal"><i class="far fa-trash-alt"></i></button>
//     </td>
    

//   </tr>`
// }



// document.addEventListener("click", function(event) {
//     agregarUser();
// });


function acept(id,nombre,apellido,email) {
    const activos=document.getElementById('activos');
    arra1.push(array);
    arra1.splice(id, 1)
    activos.innerHTML+=`
        
        <tr>
                    <th scope="row">${id}</th>
                    <td>${nombre}</td>
                    <td>${apellido}</td>
                    <td>${email}</td>
                   
                    

                  </tr>
        
        
        
        `;
       
}

let idUser;
function borrarPas(id) {
    idUser=id;
}

function borrarP() {
    db.collection("user").doc(idUser).delete().then(function(){
        console.log("document borrado");
    }).catch(function(error){
        console.error("error removing document :" ,error);
    })
}

const array = []

