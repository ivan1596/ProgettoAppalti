/* var utente = sessionStorage.getItem("utente");
if(utente == null){
    alert("Effettua LogIn");
    window.location.href = '../login/login.html';
} */

//Procedura per connettersi alla blockchain e chiamare i metodi del contratto
//var Web3 = require('web3');

/* if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // settare il provider per Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}  */
console.log("Ciao");
console.log(web3.isConnected());
//const contract = web3.eth.contract(contractAbi);
//const contractInstance = contract.at(contractAddress);

/* const transactionObject = {
  from: fromAccount,
  gas: gasLimit
  gasPrice: gasPriceInWei
}; */

//contractInstance.nomeMetodo.sendTransaction( transactionObject, (error, result) => { 
    // effettuare le operazioni per gestire gli errori e i risultati 
//}); 