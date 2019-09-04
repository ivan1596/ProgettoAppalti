var utente = sessionStorage.getItem("utente");
if(utente == null){
    alert("Effettua LogIn");
    window.location.href = '../login/login.html';
}

var Abi = giornaleABI;
var address = giornaleAdress;
web3js.eth.defaultAccount = '0xed9d02e382b34818e88B88a309c7fe71E65f419d';
var myContract = new web3js.eth.Contract(Abi, address, { gas: 10000000000000000000, gasPrice: '20000000'});

async function nuovoRecord(){
    let tot = await myContract.methods.getRecordsCount().call();
    tot++
    console.log(tot)
    uploadImage();
    let annotazioni = await document.getElementById('annotazioni').value;
    //per prendere nome immagine
    //$("#immagine")[0].files[0] con jquery
    //var fileInput = document.getElementById('immagine');   
    //var filename = fileInput.files[0].name;
    let fileImmagine = await document.getElementById('immagine').value;
    let immagine = fileImmagine.files[0].name;
    let meteo = await document.getElementById('meteo').value;
    let data = await document.getElementById('date').value;
    console.log(tot,data,meteo,annotazioni)
    await myContract.methods.newRecord(tot,data,meteo,annotazioni).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
    alert("Attendere il ricaricamento della pagina per vedere le modifiche.\nNon premere nulla prima della fine del caricamento!");
  }); 
  location.reload();
}

async function conferma(n){
    var domanda = confirm("Sicuro di voler eliminare?");
    if (domanda === true) {
      await deleteRecord(n);
    }else{
      
    }}
    async function confermaRiserva(n){
      var domanda = confirm("Sicuro di voler inserire la riserva?");
      if (domanda === true) {
        await updateRiserva(n);
      }else{
        
      }}
    
    async function deleteRecord(n){
      let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
      await myContract.methods.remRecord(chiave).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
        alert("Attendere il ricaricamento della pagina per vedere le modifiche.\nNon premere nulla prima della fine del caricamento!");
        
      }); 
      location.reload();
    }
    
async function visualizzaModale(n){
        let chiave = await myContract.methods.getRecorKeydAtIndex(n).call();
        await myContract.methods.getRecordWithKey(chiave).call((err, result) => {
          $('#datamodal').html(result.data);
          $('#meteomodale').html(result.meteo);
          $('#annmod').html(result.annotazioni);
          var img = result.immagine;
          downoloadImg(img);
        });
       
        $('#1').modal('show');
}


function crea_riga(data , riserva, n){
    
    var tr =$('<tr/>', {
        id: 'tr',
    });
    var td_data = $('<td/>').appendTo(tr);
    var a2 = '<a onclick="visualizzaModale('+n+')" id='+n+'>'+data+'</a>';

    $(a2).appendTo(td_data);
    var td_riserva = $('<td/>',{
        id: 'riserva'
    }).appendTo(tr);
    $(td_riserva).html(riserva);

    var td_id = $('<td/>',{
        id: 'id' 
      }).appendTo(tr);
      
    
  var td_button = $('<button/>',{
    id: 'button' ,
    class: 'btn btn-danger',
    onclick: "conferma("+n+")"
  }).appendTo(td_id);
  $(td_button).html('Elimina');

    tr.appendTo("#dataTables-example > tbody");
    
  }

  
   async function visualizzaGiornale(){
        let tot = await myContract.methods.getRecordsCount().call()
        console.log(tot)
         
    for(n=0 ; n<tot ; n++){
        let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
        await myContract.methods.getRecordWithKey(chiave).call((err, result) => { 
        console.log(result);
        var data = result.data;
        var meteo = result.meteo;
        var annotazioni = result.annotazioni;
        var riserva;
        if(result.riserva == false){ crea_riga(data,"NO",n) }//è al contrario
        else{crea_riga(data,"SI",n) }
       
    });}
     
  }


async function getLog(){
  myContract.getPastEvents('LogNewGLRecord', {
  fromBlock: 0,
  toBlock: 'latest'
}, function(error, events){ console.log(events); })
}
getLog()

async function visualizzaGiornaleRUP(){
  let tot = await myContract.methods.getRecordsCount().call()
  console.log(tot)
   
for(n=0 ; n<tot ; n++){
  let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
  await myContract.methods.getRecordWithKey(chiave).call((err, result) => { 
  console.log(result);
  var data = result.data;
  var meteo = result.meteo;
  var annotazioni = result.annotazioni;
  var riserva;
  if(result.riserva == false){ crea_rigaRUP(data,"NO",n) }//è al contrario
  else{crea_rigaRUP(data,"SI",n) }
 
});}

}

function crea_rigaRUP(data , riserva, n){
    
  var tr =$('<tr/>', {
      id: 'tr',
  });
  var td_data = $('<td/>').appendTo(tr);
  var a2 = '<a onclick="visualizzaModale('+n+')" id='+n+'>'+data+'</a>';

  $(a2).appendTo(td_data);
  var td_riserva = $('<td/>',{
      id: 'riserva'
  }).appendTo(tr);
  $(td_riserva).html(riserva);

  var td_id = $('<td/>',{
      id: 'id' 
    }).appendTo(tr);
  if (riserva == 'NO'){ //da testare
    var td_button = $('<button/>',{
    id: 'button' ,
    class: 'btn btn-danger',
    onclick: "confermaRiserva("+n+")"
    }).appendTo(td_id);
    $(td_button).html('Inserisci');
    tr.appendTo("#dataTables-example > tbody");}

  else {
    var td_td = $('<td/>',{
    id: 'button' 
    }).appendTo(td_id);
    $(td_td).html('');
    tr.appendTo("#dataTables-example > tbody");
  }
}

async function updateRiserva(n){
  var x = new Boolean("true");
  let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
  await myContract.methods.updateRiserva(chiave,x).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
    alert("Attendere il ricaricamento della pagina per vedere le modifiche.\nNon premere nulla prima della fine del caricamento!");
    
  }); 
  location.reload();
  visualizzaGiornaleRUP()
}


async function visualizzaGiornaleDA(){
  let tot = await myContract.methods.getRecordsCount().call()
  console.log(tot)
   
for(n=0 ; n<tot ; n++){
  let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
  await myContract.methods.getRecordWithKey(chiave).call((err, result) => { 
  console.log(result);
  var data = result.data;
  var meteo = result.meteo;
  var annotazioni = result.annotazioni;
  var riserva;
  if(result.riserva == false){ crea_rigaDA(data,"NO",n) }//è al contrario
  else{crea_rigaDA(data,"SI",n) }
 
});}

}
function crea_rigaDA(data , riserva, n){
    
  var tr =$('<tr/>', {
      id: 'tr',
  });
  var td_data = $('<td/>').appendTo(tr);
  var a2 = '<a onclick="visualizzaModale('+n+')" id='+n+'>'+data+'</a>';

  $(a2).appendTo(td_data);
  var td_riserva = $('<td/>',{
      id: 'riserva'
  }).appendTo(tr);
  $(td_riserva).html(riserva);

 
  tr.appendTo("#dataTables-example > tbody");
}


//upload immagine direttore lavori page
/* window.onload=function(){
    var fileButton = document.getElementById('immagine');
    fileButton.addEventListener('change',function(e){
        var file = e.target.files[0];
        var storageRef = firebase.storage().ref('immGiornale/' + file.name);
        storageRef.put(file);
    })
} */

function uploadImage(){
  var fileButton = document.getElementById('immagine');
  var file = fileButton.files[0];
  var filename = fileButton.files[0].name;
  var storageRef = firebase.storage().ref('immGiornale/' + filename);
  storageRef.put(file);
}

function downoloadImg(nomeImmagine){

  var storageRef = firebase.storage().ref();
  // Creare una referenza sul file che vogliamo scaricare
  var starsRef = storageRef.child('immGiornale/'+ nomeImmagine);

  // Prendi il link per il download
  starsRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
  $('#imgmodale').html(url);
  }).catch(function(error) {

  switch (error.code) {
    case 'storage/object-not-found':
      alert("Il file non esiste");
      break;

    case 'storage/unauthorized':
      alert("Non hai il permesso per accedere al file");
      break;

    case 'storage/canceled':
      alert("File cancellato");
      break;

    case 'storage/unknown':
      alert("Errore nella comunicazione col server");
      break;
  }
});

}

//funzione per il logout
function logout(){
  firebase.auth().signOut().then(function() {
      window.location.href = '../login/login.html';
    }).catch(function(error) {
      window.alert(error);
    });
}

