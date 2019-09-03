var utente = sessionStorage.getItem("utente");
if(utente == null){
    alert("Effettua LogIn");
    window.location.href = '../login/login.html';
}

function logout(){
    firebase.auth().signOut().then(function() {
        window.location.href = '../login/login.html';
      }).catch(function(error) {
        window.alert(error);
      });
}

/*$("#href").on('click', function() {
  logout();
});*/
function salutaUtente(){
  var ruolo = sessionStorage.getItem("ruolo");
  if(ruolo == 'rup'){
    document.getElementById("saluto").innerHTML = "Ciao RUP, cosa vuoi fare?";
  }else if (ruolo == 'DL') {
    document.getElementById("saluto").innerHTML = "Ciao Direttore dei Lavori, cosa vuoi fare?";
  }else if(ruolo == 'DA'){
    document.getElementById("saluto").innerHTML = "Ciao Ditta Appaltatrice, cosa vuoi fare?";
  }
}