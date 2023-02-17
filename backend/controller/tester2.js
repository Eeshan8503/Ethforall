const {catchAsync}=require('./../util/catchAsync')
const { Web3Storage }=require('web3.storage') 
const { getFilesFromPath } =require('web3.storage')
const { File} =require('web3.storage') 
const Name = require('w3name');
const fs=require('fs')
const Web3 = require('web3');
const contract = require('./../build/contracts/Main.json');
const axios=require('axios')
const testjson=require('./testt.json')
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
async function retrieve (cid) {
    axios.get('https://'+cid+'.ipfs.w3s.link/hello.json') .then(res => console.log(res.data))
    .catch(err => console.log(err))
    // request succeeded! do something with the response object here...
//    console.log(res)
  }
let jss='{"data":{"food":1,"car":4}}'
console.log(testjson.data)
function test(){
  const obj = {hello:"name",name:"Enigma"}
  const buffer = Buffer.from(JSON.stringify(testjson.data))
  console.log(obj)
}
test()