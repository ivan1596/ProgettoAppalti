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
      },
      {
        "indexed": false,
        "name": "pagato",
        "type": "bool"
      }
    ],
    "name": "LogNewLDMRecord",
    "type": "event",
    "signature": "0x8b3359d3248309e596df449e71c1f631713055b215998a0f01b4bdbed595e8e6"
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
      },
      {
        "indexed": false,
        "name": "pagato",
        "type": "bool"
      }
    ],
    "name": "LogUpdateLDMRecord",
    "type": "event",
    "signature": "0xee803ae5d9885646861d0c1317c73490b8082fb6974a0a172b15787e424fd2a1"
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
        "name": "pagato",
        "type": "bool"
      }
    ],
    "name": "LogUpdatePagatoLDMRecord",
    "type": "event",
    "signature": "0xbfc42eb8b59e4469d600ab394b728f1f01573a5b7c090128f24ebff21fe72544"
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
      },
      {
        "name": "pagato",
        "type": "bool"
      }
    ],
    "name": "updatePagamento",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xcdced40e"
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
      },
      {
        "name": "pagato",
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
      },
      {
        "indexed": false,
        "name": "immagine",
        "type": "string"
      }
    ],
    "name": "LogNewGLRecord",
    "type": "event",
    "signature": "0x32d681102e860d8de75267f96f1104cd387b3876d5f9a36b84d4802560ea21ae"
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
      },
      {
        "name": "immagine",
        "type": "string"
      }
    ],
    "name": "newRecord",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x8892143b"
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
      },
      {
        "name": "immagine",
        "type": "string"
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
pagamentiABI = [
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
        "name": "importo",
        "type": "uint128"
      }
    ],
    "name": "LogNewPERecord",
    "type": "event",
    "signature": "0xceb5ff3eb8f5b879c89142ac8860868ee8c527ddffdfb22b92d3183bb6a367f5"
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
    "name": "LogRemPERecord",
    "type": "event",
    "signature": "0x7c5b44f97c18bfa4e65c83f41504138c2ffd6869dc98417ef1886a706d39df80"
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
        "name": "importo",
        "type": "uint128"
      }
    ],
    "name": "newRecord",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xca55221c"
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
        "name": "importo",
        "type": "uint128"
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