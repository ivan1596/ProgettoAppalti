/**
 * Questa funzione utilizza il metodo della libreria firebase
 * per effettuare il login
 */

function login(){
    //alert("sono nel login");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    alert(email + password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      sessionStorage.setItem("utente",email);
      window.location.href = '../index/index.html';
      
    }).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
    });
    

}

function login2(){
  var email = "prova@prova.it";
  var password = "provaprova";
  
}