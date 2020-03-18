var db = firebase.firestore();

const perfilAd = document.getElementById('perfilAd');


db.collection("admin").onSnapshot(querySnapshot => {
  perfilAd.innerHTML = "";
  querySnapshot.forEach(doc => {
    perfilAd.innerHTML = `
    
    <div class="xl-col-5 md-col-10 sm-col-10 perfil">
        <h4>ADMINISTRADOR</h4>
          <div class="img">
            <img src="https://png.pngtree.com/element_our/png_detail/20181024/doctor-avatar-icon-medical-health-specialist-avatar-woman-doctor-avatar-png_217575.jpg" alt="">
            

              <hr>
              <p>NOMBRE : ${doc.data().nombre}</p>
              <hr>
              <p>APELLIDO :${doc.data().apellido}</p>
              <hr>
              <p>E-MAIL : ${doc.data().email} </p>
              <hr>
              <p>MATRICULA : ${doc.data().matricula}</p>
              <hr>
              <p>ESPECIALIDAD : ${doc.data().especialidad}</p>
              <hr>
              <button type="submit"> Volver</button>
      </div>
  
    `
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
