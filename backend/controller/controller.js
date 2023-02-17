const {catchAsync}=require('./../util/catchAsync')
const { Web3Storage }=require('web3.storage') 
const { getFilesFromPath } =require('web3.storage')
const { File} =require('web3.storage') 
const Name = require('w3name');
const fs=require('fs')
const Web3 = require('web3');
const contract = require('./../build/contracts/Main.json');

// Connect to the local Ethereum network
const web3 = new Web3('http://localhost:7545');

// Set the contract address and ABI
const contractAddress = contract.address;
const contractABI = contract.abi;

// Create a new contract instance
const myContract = new web3.eth.Contract(contractABI, contractAddress);

function getAccessToken () {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY0NTQ5NEIyM2YyRjU2QmEwNTljRDQzZjg4ZTA5RUMwMTQ4YWJFMkEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY2MjQ5ODc4MjEsIm5hbWUiOiJFbmlnbWEifQ.IqL0vyUDV0aCnw-w6SWl8TujLDqnxRsQP0V4mFy9b0o'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

exports.initAccount=catchAsync(async(req,res,next)=>{  
    console.log(req.body)
    function makeFileObjects () {
      // const obj = {hello:"name",name:"Enigma"}
      const buffer = Buffer.from(JSON.stringify(req.body.data))
    
      const files = [
      
        new File([buffer], 'hello.json')
      ]
      return files
    }
    async function storeFiles (files) {
      const client = makeStorageClient()
      const cid = await client.put(files)
      console.log('stored files with cid:', cid)
      return cid
    }
    let access_token=await storeFiles(makeFileObjects())
    console.log(access_token)
    const name = await Name.create();
    console.log('created new name: ', name.toString());
    const value = access_token;
    const revision = await Name.v0(name, value);
    await Name.publish(revision, name.key);
    myContract.methods.setUser(req.body.account, name.key.bytes, name.toString())
    .send({from: req.body.account})
    .then((receipt) => {
        // console.log('Transaction receipt:', receipt);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    res.status(200).json({
        status: 'success',
        data: {
          data: 'done'
        }
      });
})

exports.uploadFile = catchAsync(async (req,res,next) => {
  const name=""
  const keyss=""
  myContract.methods.getUser(req.body.account)
    .call()
    .then((result) => {
        console.log('User:', result);
        keyss=result[0]
        name=result[1]
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  // Create a JSON object to store in IPFS  
    function makeFileObjects () {
      const buffer = Buffer.from(req.body.data)
    
      const files = [
        new File([buffer],req.body.account+".json" )
      ]
      return files
    }
    async function storeFiles (files) {
      const client = makeStorageClient()
      const cid = await client.put(files)
      // console.log('stored files with cid:', cid)
      return cid
    }
    
    let access_token=await storeFiles(makeFileObjects())
    console.log("token is "+access_token)
    const name_para=Name.parse(name);
    const revision = await Name.resolve(name_para);
    console.log(revision);
    // let nextValue = access_token;
    // Make a revision to the current record (increments sequence number and sets value)
    // const name_obj=loadSigningKey("abcd");
    try{
      console.log("loaded keys, now publishing..")
      const nextRevision = await Name.increment(revision, access_token);
      await Name.publish(nextRevision,keyss);
    }
    catch(err){
      console.log(err)
      // console.log("ERROR")
    }
    res.status(200).json({
      status: 'success',
      data: {
        data: 'done' 
      }
    });
    
})
exports.getFile=catchAsync(async(req,res,next)=>{
  const name_para="";
  myContract.methods.getUser(req.body.account)
    .call()
    .then((result) => {
        name_para=result[1]
    })
    .catch((error) => {
        console.error('Error:', error);
    });
  const name = Name.parse(name_para);
  const revision = await Name.resolve(name);
  console.log('Resolved value:', revision.value);
  res.status(200).json({
    status: 'success',
    data: {
      data: retrieve(revision.value)
    }
  });
  
})

async function retrieve (cid) {
  axios.get('https://'+cid+'.ipfs.w3s.link/hello.json') .then(res => {return res.data})
  .catch(err => console.log(err))
  // request succeeded! do something with the response object here...
//    console.log(res)
}

