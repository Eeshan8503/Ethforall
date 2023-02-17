const express=require('express');
const app=express();
const cors = require("cors");
const route=require('./routes/routes');
const port=5000;
require('dotenv').config()

app.use(express.json());
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
  };
  
app.use(cors(corsOptions))

app.use('/api',route);


app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})