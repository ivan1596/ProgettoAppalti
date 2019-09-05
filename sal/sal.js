var utente = sessionStorage.getItem("utente");
if(utente == null){
    alert("Effettua LogIn");
    window.location.href = '../login/login.html';
}

/*var dataP;
var importoP;
var dataM;
var importoM;

//funzione per il logout
function logout(){
    firebase.auth().signOut().then(function() {
        window.location.href = '../login/login.html';
      }).catch(function(error) {
        window.alert(error);
      });
  }

  var Abi = misureandregistroABI;
  var address = misureandregistroAdress;
  web3js.eth.defaultAccount = '0xed9d02e382b34818e88B88a309c7fe71E65f419d';
  var myContract = new web3js.eth.Contract(Abi, address, { gas: 10000000000000000000, gasPrice: '20000000'});
  var myContractPagamenti = new web3js.eth.Contract(pagamentiABI, pagamentiAdress, { gas: 10000000000000000000, gasPrice: '20000000'});

 
async function visualizzaPagamenti(){
  let tot = await myContractPagamenti.methods.getRecordsCount().call()
  console.log(tot)
  for(n=0 ; n<tot ; n++){
    let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
    await myContractPagamenti.methods.getRecordWithKey(chiave).call((err, result) => { 
        console.log(result)
    dataP = result.data;
    importoP = result.importo;//  /100
    
    })
}}*/
