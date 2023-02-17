import React, { useState, useEffect } from 'react';
import { useWeb3 } from './../Util/web3';
import MyContract from '../../public/contracts/Main.json'
const Home = () => {
    const { web3, accounts, contract } = useWeb3(MyContract, MyContract.address);
    const [contractInstance, setContractInstance] = useState(null);
    const [value, setValue] = useState(null);
    useEffect(() => {
        const init = async () => {
          setContractInstance(contract);
        };
        init();
      }, []);
      const handleClick = async () => {
        const resultt = await contractInstance.methods.setMessage("GG BOIS").send({ from: accounts[0] });
        const result = await contractInstance.methods.getMessage().call();
        setValue(result);
      };
  return (
    <div>
      <h1>My Contract</h1>
      <button onClick={handleClick}>Get Value</button>
      {value && <p>Value: {value}</p>}
      <p>{accounts&&accounts.length>0 && accounts[0]}</p>
    </div>
  )
}

export default Home