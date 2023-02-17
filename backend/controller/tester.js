const Web3 = require('web3');
const contract = require('./../build/contracts/Main.json');
const fetch=require('node-fetch');
// Connect to the local Ethereum network
const web3 = new Web3('http://localhost:7545');

// Set the contract address and ABI
const contractAddress = contract.address;
const contractABI = contract.abi;

// Create a new contract instance
const myContract = new web3.eth.Contract(contractABI, contractAddress);

// Call the setUser function
myContract.methods.setUser('0x275a6BCE1B8563A919F2EBB69106c7Fe501B9D33', '0x1234', 'John')
    .send({from: '0x2bfbEfe3559991aCA9FF331C064931d01C720aA5'})
    .then((receipt) => {
        // console.log('Transaction receipt:', receipt);
    })
    .catch((error) => {
        // console.error('Error:', error);
    });

// Call the getUser function
myContract.methods.getUser('0x275a6BCE1B8563A919F2EBB69106c7Fe501B9D33')
    .call()
    .then((result) => {
        console.log(result[0]);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

