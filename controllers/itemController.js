const Item = require("../models/Item");

const getItems = async(req,res)=>{
   console.log("Hello")
    try{
    const items = await Item.find({});
    
    console.log(req);
  
    res.send(items);
    }catch (error) {
    console.log(error);
    res.status(500).send({mesage:"Server Error"});
    }
}

const getItemById = async(req,res)=>{
   let {itemId} = req.body;
   console.log(itemId);
    try{
    const item = await Item.findById(req.params.id);//id to itemId
    
    res.send(item);
    console.log(item);
    }catch (error) {
    console.log(error);
    res.status(500).send({mesage:"Server Error"});
    }
}

module.exports = {
    getItems,getItemById
}