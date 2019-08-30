const misureandregistroABI = [
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
        "name": "num_ord",
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
      },
      {
        "indexed": false,
        "name": "riserva",
        "type": "bool"
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
        "name": "num_ord",
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
      },
      {
        "indexed": false,
        "name": "riserva",
        "type": "bool"
      }
    ],
    "name": "LogUpdateLDMRecord",
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
    "name": "LogRemLDMRecord",
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
        "name": "riserva",
        "type": "bool"
      }
    ],
    "name": "LogUpdateRiservaLDMRecord",
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
        "name": "num_ord",
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
        "name": "riserva",
        "type": "bool"
      }
    ],
    "name": "updateRiserva",
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
        "name": "num_ord",
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
      },
      {
        "name": "riserva",
        "type": "bool"
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
    "name": "getRecordWithKey",
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
        "name": "num_ord",
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
      },
      {
        "name": "riserva",
        "type": "bool"
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
    "name": "getRecorKeydAtIndex",
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