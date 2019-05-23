var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
const Tx = require('ethereumjs-tx');
const web3 = require('web3');
var cors = require('cors');
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,application/json, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    next();
});

if (typeof web3 !== 'undefined') {
    web3js = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// Ricavare abi metodo 1
var LavoriContract = web3.eth.contract("Incollare abi qui");
// Specificare indirizzo metodo 1
var lavori = CoursetroContract.at('inserire indirizzo contratto qui');

// Instanziare myContract metodo 2
var myABI = "";
var myContractAddress = "";
var myContract = new web3js.eth.Contract(myABI, myContractAddress);

//instanziare contratto metodo 3

var contractAbi= "";
var deployedContract = web3.eth.contract(abi).at("contract address");

//invio transazione 
myContract.methods.myMethod(123).send().then(function(response){
    console.log(response);
});