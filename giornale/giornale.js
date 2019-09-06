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
    var tot = Math.floor(Math.random() * 100000000000000000)
    
    uploadImage();
    var annotazioni = await document.getElementById('annotazioni').value;
    var fileImmagine = await document.getElementById('immagine');
    if(fileImmagine.files[0].name == undefined){
      var immagine = 'default.jpg';
    }else{
      var immagine = fileImmagine.files[0].name;
    }
    var meteo = await document.getElementById('meteo').value;
    var data = await document.getElementById('date').value;
    console.log(tot,data,meteo,annotazioni)
    await myContract.methods.newRecord(tot,data,meteo,annotazioni,immagine).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
   
  }); 
  
  location.reload();
}

async function conferma(n){
    var domanda = confirm("Sicuro di voler eliminare?");
    if (domanda === true) {
      modalLoading.init(true)
      await deleteRecord(n);
    }else{
      
    }}
    async function confermaRiserva(n){
      var domanda = confirm("Sicuro di voler inserire la riserva?");
      if (domanda === true) {
        modalLoading.init(true)
        await updateRiserva(n);
      }else{
        
      }}
    
    async function deleteRecord(n){
      let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
      await myContract.methods.remRecord(chiave).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
        
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
        $("#nascondi1").hide()
        $("#nascondi2").hide()
        $("#nascondi3").hide()
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




async function visualizzaGiornaleRUP(){
        $("#nascondi1").hide()
        $("#nascondi2").hide()
        $("#nascondi3").hide()
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
  if (riserva == 'NO'){
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
    
  }); 
  location.reload();
  visualizzaGiornaleRUP()
}


async function visualizzaGiornaleDA(){
        $("#nascondi1").hide()
        $("#nascondi2").hide()
        $("#nascondi3").hide()
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
  $('#imgmodale').attr('src',url);
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


async function getLog(){
  myContract.getPastEvents('LogRemGLRecord', {
    fromBlock: 0,
    toBlock: 'latest'
	}, async function(error, events1){
		for (var i=0 in events1) {
      
      var eventObj1 = events1[i];
      chiave=eventObj1.returnValues.key
       await confronta(chiave)
    
		}
});

async function confronta(chiave){
  myContract.getPastEvents('LogNewGLRecord', {
    fromBlock: 0,
    toBlock: 'latest'
  }, async function(error, events2){
    for (var y=0 in events2) {
      var eventObj2 = events2[y];console.log('primachiave:'+chiave+'\nseconda:'+eventObj2.returnValues.key);
      if(chiave == eventObj2.returnValues.key){crea_rigaEliminazioni(eventObj2.returnValues.data , eventObj2.returnValues.meteo, eventObj2.returnValues.annotazioni)}
      else console.log('no')
    }
});
}
  
  /*
  myContract.getPastEvents('LogNewGLRecord', {
  fromBlock: 0,
  toBlock: 'latest'
}, function(error, events){ console.log(events);
  document.getElementById("log").innerHTML = events[0];})*/
}

/*
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

}*/

function crea_rigaEliminazioni(data , meteo, annotazione){
    
  var tr =$('<tr/>', {
      id: 'tr',
  });
  var td_data = $('<td/>').appendTo(tr);
  $(td_data).html(data);

  var td_meteo = $('<td/>',{
      id: 'meteo'
  }).appendTo(tr);
  $(td_meteo).html(meteo);
  
  var td_annotazione = $('<td/>',{
    id: 'annotazione'
}).appendTo(tr);
$(td_annotazione).html(annotazione);


  tr.appendTo("#dataTables-example > tbody");
}
//funzione per controllo form
function validazioneForm() {
    var meteo = document.getElementById('meteo').value;
    var data = document.getElementById('date').value;
    var annotazioni = document.getElementById('annotazioni').value;
    if(meteo == "" || data == "" || annotazioni == ""){
      alert("Inserire tutti i campi")
    }else{
      nuovoRecord();
    }

}

