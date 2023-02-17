import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

export const useWeb3 = (contractJson, contractAddress) => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initializeWeb3 = async () => {
      // Check if web3 is already injected (e.g. in a browser with MetaMask)
      let web3js = window.web3;
      if (typeof web3js !== 'undefined') {
        web3js = new Web3(window.web3.currentProvider);
        setWeb3(web3js);
        const accounts = await web3js.eth.getAccounts();
        setAccounts(accounts);
        const contract = new web3js.eth.Contract(contractJson.abi, contractAddress);
        setContract(contract);
      } else {
        console.log("No web3? You should consider trying MetaMask!");
      }
    };

    initializeWeb3();
  }, []);

  return { web3, accounts, contract };
};