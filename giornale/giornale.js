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
    let tot = await myContract.methods.getRecordsCount().call()
    tot++
    console.log(tot)
    let annotazioni = await document.getElementById('annotazioni').value;
    let immagine = await document.getElementById('immagine').value;
    let meteo = await document.getElementById('meteo').value;
    let data = await document.getElementById('date').value;
    await myContract.methods.newRecord(tot,data,meteo,annotazioni).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
    alert("Attendere il ricaricamento della pagina per vedere le modifiche.\nNon premere nulla prima della fine del caricamento!");
  }); 
  location.reload();
}

function crea_riga(annotazioni , riserva){
    
    var tr =$('<tr/>', {
        id: 'tr',
    });
    var td_annotazioni = $('<td/>',{
        id: 'tar' 
    }).appendTo(tr);
    $(td_annotazioni).html(annotazioni);

    var td_riserva = $('<td/>',{
        id: 'riserva' 
    }).appendTo(tr);
    $(td_riserva).html(riserva);
  
  
    tr.appendTo("#dataTables-example > tbody");
    
  }
  
  
   async function visualizzaGiornale(){
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
        if(result.riserva=='false'){riserva = "NO";}
        else{riserva = "SI";}
        console.log(data);
        console.log(desc);
        console.log(riserva);
        console.log(result[0])
        crea_riga(num_ord,tariffa,data,desc,perc/100,riserva);  
    });}
     
  }