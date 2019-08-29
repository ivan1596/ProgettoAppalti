/* var utente = sessionStorage.getItem("utente");
if(utente == null){
    alert("Effettua LogIn");
    window.location.href = '../login/login.html';
} */

//Procedura per connettersi alla blockchain e chiamare i metodi del contratto
//var Web3 = require('web3');
var Abi = misureandregistroABI;
var address = misureandregistroAdress;
web3js.eth.defaultAccount = '0xed9d02e382b34818e88B88a309c7fe71E65f419d';
var myContract = new web3js.eth.Contract(Abi, address, { gasPrice: '20000000000'});

//var posneg = document.getElementById(radiogroup);
/* myContract.methods.newRecord(8,'ac','db','cd',2,4).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
 console.log(transactionHash);
});*/
function nuovoRecord(){
  var nord = document.getElementById('numord').value;
  var tariffa = document.getElementById('tariffa').value;
  var data = document.getElementById('date').value;
  var descrizione = document.getElementById('deslav').value;
  var prezzo_unitario = document.getElementById('prezzo_unitario').value;
  var percentuale = document.getElementById('percentuale').value;
  var posneg = document.getElementById('optionsRadios1').value; console.log(posneg)
  myContract.methods.newRecord(4133333434344,tariffa,data,nord,descrizione,prezzo_unitario,percentuale).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
    alert("Inserimento avvenuto con successo");
    
  }); 
  //location.reload();
}

function crea_riga(num_ord, tariffa, data, desc, pos, neg, riserva){
    
  var tr =$('<tr/>', {
      id: 'tr'+tariffa ,
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

  var td_pos = $('<td/>',{
      id: 'pos' 
  }).appendTo(tr);
  $(td_pos).html(pos);

  var td_neg = $('<td/>',{
      id: 'neg' 
  }).appendTo(tr);
  $(td_neg).html(neg);

  var td_riserva = $('<td/>',{
      id: 'riserva' 
  }).appendTo(tr);
  $(td_riserva).html(riserva);


  tr.appendTo("#dataTables-example > tbody");
  
}


 async function visualizzaLibretto(){
      let tot = await myContract.methods.getRecordsCount().call()
      console.log(tot)
       
  for(n=0 ; n<tot ; n++){
      let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
      myContract.methods.getRecordWithKey(chiave).call((err, result) => { 
      console.log(result);
      var num_ord = result.nord;
      var tariffa = result.tariffa;
      var data = result.data;
      var desc = result.descrizione;
    //if()
      var pos = result.percentuale_completamento;
      var neg = result.percentuale_completamento;
      var riserva;
      if(result.riserva=='false'){riserva = "NO";}
      else{riserva = "SI"}
      console.log(data);
      console.log(desc);
      console.log(pos);
      console.log(neg);
      console.log(riserva);
      crea_riga(num_ord,tariffa,data,desc,pos,neg,riserva);  
  });}
   
}