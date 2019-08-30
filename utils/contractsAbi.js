const misureandregistroABI = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
<<<<<<< HEAD
    "type": "constructor"
=======
    "type": "constructor",
    "signature": "constructor"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
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
<<<<<<< HEAD
    "type": "event"
=======
    "type": "event",
    "signature": "0x297644f69d3b815d4a58cd95f1f1debf34068cfa2a385c451d0fc7c749f4a984"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
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
<<<<<<< HEAD
    "type": "event"
=======
    "type": "event",
    "signature": "0xcdd8da1749e9b542b0a5735755f724f649beacebddd1df6228ed772927268d1d"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
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
<<<<<<< HEAD
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
=======
    "type": "event",
    "signature": "0x7aa203b0c72552bd4514add97dacd45db05062baba0d480d60b11adcc2a95bb2"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
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
<<<<<<< HEAD
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
=======
    "type": "function",
    "signature": "0xcb818b7b"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
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
<<<<<<< HEAD
    "type": "function"
=======
    "type": "function",
    "signature": "0xb21743f4"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
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
<<<<<<< HEAD
    "type": "function"
=======
    "type": "function",
    "signature": "0xdccd894a"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
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
<<<<<<< HEAD
    "type": "function"
=======
    "type": "function",
    "signature": "0x26afe910"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
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
<<<<<<< HEAD
    "type": "function"
=======
    "type": "function",
    "signature": "0x505158bb"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
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
<<<<<<< HEAD
    "type": "function"
=======
    "type": "function",
    "signature": "0x805d4dd2"
>>>>>>> 69cf4fd10789474a2e002a1422d38352e39420b2
  }
];