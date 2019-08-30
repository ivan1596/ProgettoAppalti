/**
 * Questa funzione utilizza il metodo della libreria firebase
 * per effettuare il login
 * email: direttore@ lavori.it psw:direttorelavori
 * email: ditta@ appaltatrice.it psw:dittaapp
 * emai: rup@ rup.it psw:ruprup
 */

function login(){
    //alert("sono nel login");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //alert(email + password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      var userID = firebase.auth().currentUser.uid;
      //console.log(userID);
      sessionStorage.setItem("utente",userID);
      getRuolo(userID);
    }).catch(function(error) {
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
    

}

function getRuolo(id){
  //var id = 'BeXyUNORIgWKBBk81JFAt6GDSgv1';
  firebase.firestore().collection('utenti').doc(id).get().then( (docRef ) => {    
    //console.log(docRef.data());
    //console.log(docRef);
    var ruolo = docRef.data().ruolo;
    //console.log(ruolo);
    sessionStorage.setItem("ruolo",ruolo);
    if(ruolo == 'rup'){
      window.location.href = '../index/indexRUP.html';
    }else if(ruolo == 'DL'){
      window.location.href = '../index/indexDL.html';
    }else if (ruolo == 'DA') {
      window.location.href = '../index/indexDA.html';
    }          
  }).catch( (error) => {
    console.log(error);
   })
  
}