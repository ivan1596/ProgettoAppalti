misureandregistroABI = [
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
    "type": "event",
    "signature": "0x297644f69d3b815d4a58cd95f1f1debf34068cfa2a385c451d0fc7c749f4a984"
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
    "type": "event",
    "signature": "0xcdd8da1749e9b542b0a5735755f724f649beacebddd1df6228ed772927268d1d"
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
    "type": "event",
    "signature": "0x7aa203b0c72552bd4514add97dacd45db05062baba0d480d60b11adcc2a95bb2"
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
    "type": "event",
    "signature": "0x56f7ed57e35ae3e1a6510c34796927eeea9853b7e4b39d896b0333b1c47988e1"
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
    "type": "function",
    "signature": "0xcb818b7b"
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
    "type": "function",
    "signature": "0x2ac3146a"
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
    "type": "function",
    "signature": "0xdccd894a"
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
    "type": "function",
    "signature": "0x26afe910"
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
    "type": "function",
    "signature": "0x505158bb"
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
    "type": "function",
    "signature": "0x805d4dd2"
  }
];

giornaleABI = [
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
        "name": "data",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "meteo",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "annotazioni",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "riserva",
        "type": "bool"
      }
    ],
    "name": "LogNewGLRecord",
    "type": "event",
    "signature": "0xfa390816578ebbafe97c5b0c10029cbe611afcc0eb9901181252324878c17397"
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
    "name": "LogRemGLRecord",
    "type": "event",
    "signature": "0x471913c04e2268294eedf5a0492b5354c45160b427c3094a78f1037c89583a78"
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
    "name": "LogUpdateRiservaGLRecord",
    "type": "event",
    "signature": "0xf89c6a59f4436fee9da2e903c57766f68774bca50fe0c4b554b362f5ab6e1493"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "key",
        "type": "uint256"
      },
      {
        "name": "data",
        "type": "string"
      },
      {
        "name": "meteo",
        "type": "string"
      },
      {
        "name": "annotazioni",
        "type": "string"
      }
    ],
    "name": "newRecord",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xd5a45f26"
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
    "type": "function",
    "signature": "0x2ac3146a"
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
    "type": "function",
    "signature": "0xdccd894a"
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
        "name": "data",
        "type": "string"
      },
      {
        "name": "meteo",
        "type": "string"
      },
      {
        "name": "annotazioni",
        "type": "string"
      },
      {
        "name": "riserva",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x26afe910"
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
    "type": "function",
    "signature": "0x505158bb"
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
    "type": "function",
    "signature": "0x805d4dd2"
  }
];