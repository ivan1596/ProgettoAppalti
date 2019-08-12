/**
 * Questa funzione utilizza il metodo della libreria firebase
 * per effettuare il login
 */
function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
        sessionStorage.setItem("utente",email);
        window.location.href = '../index/index.html';
      }).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
      });
    

}