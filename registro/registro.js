var utente = sessionStorage.getItem("utente");
if(utente == null){
    alert("Effettua LogIn");
    window.location.href = '../login/login.html';
}


var Abi = misureandregistroABI;
var address = misureandregistroAdress;
web3js.eth.defaultAccount = '0xed9d02e382b34818e88B88a309c7fe71E65f419d';
var myContract = new web3js.eth.Contract(Abi, address, { gas: 10000000000000000000, gasPrice: '20000000'});
var myContractPagamenti = new web3js.eth.Contract(pagamentiABI, pagamentiAdress, { gas: 10000000000000000000, gasPrice: '20000000'});

async function visualizzaRegistro(){
    var dataLastP
    let totP = await myContractPagamenti.methods.getRecordsCount().call()
    let chiaveP = await myContractPagamenti.methods.getRecorKeydAtIndex(totP-1).call()
    await myContractPagamenti.methods.getRecordWithKey(chiaveP).call((err, result) => {
        dataLastP = result.data
     })

    let tot = await myContract.methods.getRecordsCount().call()
    var last = tot-1
    var totDebito = 0
for(n=0 ; n<tot ; n++){
    let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
    await myContract.methods.getRecordWithKey(chiave).call((err, result) => { 
    console.log(result);
    var num_ord = result.num_ord;
    var tariffa = result.tariffa;
    var data = result.data;
    var desc = result.descrizione;
    var perc = (result.percentuale_completamento/100);
    var prezzo_unitario = (result.prezzo_unitario/100);
    var debito = (result.debito/1000000)
    totDebito+=debito
    
    crea_riga(num_ord, tariffa, data, desc, perc , prezzo_unitario , debito , n , totDebito, last , dataLastP);  
    
});}
 
}

function crea_riga(num_ord, tariffa, data, desc, perc , prezzo_unitario , debito, n , totDebito , last , dataLastP){
    
    var confrontoDate = dates.compare(data,dataLastP)       //-1 se a<b



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
    $(td_perc).html(perc);
  
    var td_prezzo = $('<td/>',{
        id: 'prezzo' 
    }).appendTo(tr);
    $(td_prezzo).html(prezzo_unitario);

    if(debito > 0 && confrontoDate == -1){
        var td_debito = $('<td/>',{
            id: 'debito' 
        }).appendTo(tr);
        $(td_debito).html(debito);
        if(n == last){
            var td_id = $('<td/>',{
            id: 'id' 
            }).appendTo(tr);
            var td_button = $('<button/>',{
            id: 'button' ,
            class: 'btn btn-danger',
            onclick: "confermaPagamento("+totDebito+")"
            }).appendTo(td_id);
            $(td_button).html('Paga');
            }
        $('<td/>').html()
        tr.appendTo("#dataTables-example > tbody");}
    else{
        var td_debito = $('<td/>',{
            id: 'debito' 
        }).appendTo(tr);
        $(td_debito).html('0');

        var td_pagamento = $('<td/>',{
            id: 'pagamento' 
        }).appendTo(tr);
        $(td_pagamento).html('Pagamento');
        $('<td/>').html()
        tr.appendTo("#dataTables-example > tbody");}
  }

  async function pagamento(importo){
    let tot = await myContractPagamenti.methods.getRecordsCount().call()
    tot++
    console.log(tot)
    var data = getData()

    await myContractPagamenti.methods.newRecord(tot,data,importo/100).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
      alert("Attendere il ricaricamento della pagina per vedere le modifiche.\nNon premere nulla prima della fine del caricamento!");    
    }); 
    location.reload();

  }
  async function confermaPagamento(totDebito){
    var domanda = confirm("Sicuro di voler pagare € "+totDebito+" ?");
    if (domanda === true) {
      await pagamento(totDebito);
    }else{
    }}



function getData(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return today
}

async function getPagamenti(){
    let tot = await myContractPagamenti.methods.getRecordsCount().call()
  for(n=0 ; n<tot ; n++){
      let chiave = await myContract.methods.getRecorKeydAtIndex(n).call()
      await myContract.methods.getRecordWithKey(chiave).call((err, result) => { 
      console.log("--------"+result.importo);
      })
}}



var dates = {
    convert:function(d) {
        // Converts the date in d to a date-object. The input can be:
        //   a date object: returned without modification
        //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
        //   a number     : Interpreted as number of milliseconds
        //                  since 1 Jan 1970 (a timestamp) 
        //   a string     : Any format supported by the javascript engine, like
        //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
        //  an object     : Interpreted as an object with year, month and date
        //                  attributes.  **NOTE** month is 0-11.
        return (
            d.constructor === Date ? d :
            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
            d.constructor === Number ? new Date(d) :
            d.constructor === String ? new Date(d) :
            typeof d === "object" ? new Date(d.year,d.month,d.date) :
            NaN
        );
    },
    compare:function(a,b) {
        // Compare two dates (could be of any type supported by the convert
        // function above) and returns:
        //  -1 : if a < b
        //   0 : if a = b
        //   1 : if a > b
        // NaN : if a or b is an illegal date
        // NOTE: The code inside isFinite does an assignment (=).
        return (
            isFinite(a=this.convert(a).valueOf()) &&
            isFinite(b=this.convert(b).valueOf()) ?
            (a>b)-(a<b) :
            NaN
        );
    },
    inRange:function(d,start,end) {
        // Checks if date in d is between dates in start and end.
        // Returns a boolean or NaN:
        //    true  : if d is between start and end (inclusive)
        //    false : if d is before start or after end
        //    NaN   : if one or more of the dates is illegal.
        // NOTE: The code inside isFinite does an assignment (=).
       return (
            isFinite(d=this.convert(d).valueOf()) &&
            isFinite(start=this.convert(start).valueOf()) &&
            isFinite(end=this.convert(end).valueOf()) ?
            start <= d && d <= end :
            NaN
        );
    }
}