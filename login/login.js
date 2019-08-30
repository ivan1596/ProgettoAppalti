/**
 * Questa funzione utilizza il metodo della libreria firebase
 * per effettuare il login
 */

function login(){
    //alert("sono nel login");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //alert(email + password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      
      window.location.href = '../index/index.html';
      var userID = firebase.auth().currentUser.uid;
      sessionStorage.setItem("utente",userID);
      getRuolo(userID);
    }).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
    

}

function getRuolo(id){
  firebase.firestore().collection('utenti').doc(id).get().then( (docRef ) => {    
    //console.log(docRef.data());
    var ruolo = docRef.ruolo;
    if(ruolo == 'rup'){
      window.location.href = '../index/index.html';
    }else if(ruolo == 'DL'){
      window.location.href = '../index/index.html';
    }else if (ruolo == 'DA') {
      window.location.href = '../index/index.html';
    }          
  }).catch( (error) => {
    console.log(error);
   })
  
}