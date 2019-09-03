/* var utente = sessionStorage.getItem("utente");
if(utente == null){
    alert("Effettua LogIn");
    window.location.href = '../login/login.html';
} */

var Abi = misureandregistroABI;
var address = misureandregistroAdress;
web3js.eth.defaultAccount = '0xed9d02e382b34818e88B88a309c7fe71E65f419d';
var myContract = new web3js.eth.Contract(Abi, address, { gas: 10000000000000000000, gasPrice: '20000000'});

async function nuovoRecord(){
  let tot = await myContract.methods.getRecordsCount().call()
  tot++
  console.log(tot)
  let num_ord = await document.getElementById('numord').value;
  let tariffa = await document.getElementById('tariffa').value;
  let data = await document.getElementById('date').value;
  let descrizione = await document.getElementById('deslav').value;
  let prezzo_unitario = await document.getElementById('prezzo_unitario').value;
  let percentuale = await document.getElementById('percentuale').value;
  await myContract.methods.newRecord(tot,tariffa,data,num_ord,descrizione,prezzo_unitario*100,percentuale*100).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
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

function crea_riga(num_ord, tariffa, data, desc, percentuale , riserva, n){
    
  var tr =$('<tr/>', {
      id: 'tr',
  });  
  var tariffaComplete = num_ord + '<br>' + tariffa + '<br>' + data;
  var td_tariffa = $('<td/>',{
      id: 'tar' 
  }).appendTo(tr);
  $(td_tariffa).html(tariffaComplete);

  var td_des = $('<td/>',{
      id: 'des' 
  }).appendTo(tr);
  $(td_des).html(desc);

  var td_perc = $('<td/>',{
      id: 'neg' 
  }).appendTo(tr);
  $(td_perc).html(percentuale);

  var td_riserva = $('<td/>',{
      id: 'riserva' 
  }).appendTo(tr);
  $(td_riserva).html(riserva);
$('<td/>').html()

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


 async function visualizzaLibretto(){
      let tot = await myContract.methods.getRecordsCount().call()
      console.log(tot)
       
  for(n=0 ; n<tot ; n++){
      let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
      await myContract.methods.getRecordWithKey(chiave).call((err, result) => { 
      console.log(result);
      var num_ord = result.num_ord;
      var tariffa = result.tariffa;
      var data = result.data;
      var desc = result.descrizione;
      var perc = result.percentuale;
      //var chiave = result.key;
      var riserva;
      if(result.riserva!=='false'){riserva = "NO";}
      else{riserva = "SI";}
      console.log(data);
      console.log(desc);
      console.log(riserva);
      console.log(result[0])
      crea_riga(num_ord,tariffa,data,desc,perc/100,riserva,n);  
  });}
   
}


async function visualizzaLibrettoRUP(){
  let tot = await myContract.methods.getRecordsCount().call()
  console.log(tot)
   
for(n=0 ; n<tot ; n++){
  let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
  await myContract.methods.getRecordWithKey(chiave).call((err, result) => { 
  console.log(result);
  var num_ord = result.num_ord;
  var tariffa = result.tariffa;
  var data = result.data;
  var desc = result.descrizione;
  var perc = result.percentuale;
  //var chiave = result.key;
  var riserva;
  if(result.riserva!=='false'){riserva = "NO";}
  else{riserva = "SI";}
  console.log(data);
  console.log(desc);
  console.log(riserva);
  console.log(result[0])
  crea_rigaRUP(num_ord,tariffa,data,desc,perc/100,riserva,n);  
});}

}

function crea_rigaRUP(num_ord, tariffa, data, desc, percentuale , riserva, n){
    
  var tr =$('<tr/>', {
      id: 'tr',
  });  
  var tariffaComplete = num_ord + '<br>' + tariffa + '<br>' + data;
  var td_tariffa = $('<td/>',{
      id: 'tar' 
  }).appendTo(tr);
  $(td_tariffa).html(tariffaComplete);

  var td_des = $('<td/>',{
      id: 'des' 
  }).appendTo(tr);
  $(td_des).html(desc);

  var td_perc = $('<td/>',{
      id: 'neg' 
  }).appendTo(tr);
  $(td_perc).html(percentuale);

  var td_riserva = $('<td/>',{
      id: 'riserva' 
  }).appendTo(tr);
  $(td_riserva).html(riserva);
$('<td/>').html()

var td_id = $('<td/>',{
  id: 'id' 
}).appendTo(tr);

if (riserva!==false){ //da testare
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
  let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
  await myContract.methods.updateRiserva(chiave,'true').send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
    alert("Attendere il ricaricamento della pagina per vedere le modifiche.\nNon premere nulla prima della fine del caricamento!");
    
  }); 
  location.reload();
}
  