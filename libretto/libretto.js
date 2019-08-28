/* var utente = sessionStorage.getItem("utente");
if(utente == null){
    alert("Effettua LogIn");
    window.location.href = '../login/login.html';
} */

//Procedura per connettersi alla blockchain e chiamare i metodi del contratto
//var Web3 = require('web3');

const Abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "key",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "tariffa",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "data",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "descrizione",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "percentuale_completamento",
        "type": "uint128"
      },
      {
        "indexed": false,
        "name": "prezzo_unitario",
        "type": "uint128"
      },
      {
        "indexed": false,
        "name": "debito",
        "type": "uint128"
      }
    ],
    "name": "LogNewLDMRecord",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "key",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "tariffa",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "data",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "descrizione",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "percentuale_completamento",
        "type": "uint128"
      },
      {
        "indexed": false,
        "name": "prezzo_unitario",
        "type": "uint128"
      },
      {
        "indexed": false,
        "name": "debito",
        "type": "uint128"
      }
    ],
    "name": "LogUpdateRecord",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "key",
        "type": "uint256"
      }
    ],
    "name": "LogRemRecord",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "key",
        "type": "uint256"
      },
      {
        "name": "tariffa",
        "type": "string"
      },
      {
        "name": "data",
        "type": "string"
      },
      {
        "name": "descrizione",
        "type": "string"
      },
      {
        "name": "prezzo_unitario",
        "type": "uint128"
      },
      {
        "name": "percentuale_completamento",
        "type": "uint128"
      }
    ],
    "name": "newRecord",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "key",
        "type": "uint256"
      },
      {
        "name": "tariffa",
        "type": "string"
      },
      {
        "name": "data",
        "type": "string"
      },
      {
        "name": "descrizione",
        "type": "string"
      },
      {
        "name": "prezzo_unitario",
        "type": "uint128"
      },
      {
        "name": "percentuale_completamento",
        "type": "uint128"
      }
    ],
    "name": "updateRecord",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "key",
        "type": "uint256"
      }
    ],
    "name": "remRecord",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "key",
        "type": "uint256"
      }
    ],
    "name": "getRecord",
    "outputs": [
      {
        "name": "tariffa",
        "type": "string"
      },
      {
        "name": "data",
        "type": "string"
      },
      {
        "name": "descrizione",
        "type": "string"
      },
      {
        "name": "percentuale_completamento",
        "type": "uint128"
      },
      {
        "name": "prezzo_unitario",
        "type": "uint128"
      },
      {
        "name": "debito",
        "type": "uint128"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getRecordsCount",
    "outputs": [
      {
        "name": "count",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getRecordAtIndex",
    "outputs": [
      {
        "name": "key",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

//const Web3 = require('web3');
web3js.eth.defaultAccount = '0xed9d02e382b34818e88B88a309c7fe71E65f419d'
var myContract = new web3js.eth.Contract(Abi, '0xA501AfD7d6432718daF4458Cfae8590d88de818E', { gasPrice: '20000000000'});


/* myContract.methods.newRecord(8,'ac','db','cd',2,4).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
 console.log(transactionHash);
});
myContract.methods.newRecord(7,'ac','db','cd',2,4).send({from:web3js.eth.defaultAccount,gas: 4500000,gasPrice:'0'}, function(error, transactionHash){
  console.log(transactionHash);
 }); */
//debugger
myContract.methods.getRecordsCount().call().then(console.log)
myContract.methods.getRecord(7).call((err, result) => { console.log("0->"+result[0]+"\n"+"1->"+result[1]+"\n"+"2->"+result[2]+"\n"+"3->"+result[3]+"\n"+"4->"+result[4])});
//console.log(web3js.eth.getAccounts());