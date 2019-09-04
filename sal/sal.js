var utente = sessionStorage.getItem("utente");
if(utente == null){
    alert("Effettua LogIn");
    window.location.href = '../login/login.html';
}

//funzione per il logout
function logout(){
    firebase.auth().signOut().then(function() {
        window.location.href = '../login/login.html';
      }).catch(function(error) {
        window.alert(error);
      });
  }