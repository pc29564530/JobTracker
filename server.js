const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

const itemRoutes = require('./routes/itemRoutes');
const app=express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:false,
}))

const db = require('./config/keys').mongoURI;

mongoose.connect((db) )
    .then(()=>{
        console.log('mongodb connection is successfull')
    })
    .catch((err)=>{
        console.log(err);
    })
app.use('/routes/items',itemRoutes);


const port = process.env.PORT || 5000;

  

app.listen(port,()=>{
    console.log(`server has been started ${port}`);
})