const express = require('express');
const mongoose = require('mongoose');
const config = require('config');


const item = require('./routes/api/item');
const app=express();

app.use(express.json());
app.use(express.urlencoded({
    extended:false,
}))

// app.get('/',(res,req)=> {
//     console.log("Hello World");
// })

const db = require('./config/keys').mongoURI;

mongoose.connect((db) )
    .then(()=>{
        console.log('mongodb connection is successfull')
    })
    .catch((err)=>{
        console.log(err);
    })
app.use('/api/item',item);

const port = process.env.PORT || 5000;

  

app.listen(port,()=>{
    console.log(`server has been started ${port}`);
})