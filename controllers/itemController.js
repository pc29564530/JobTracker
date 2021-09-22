const Item = require("../models/Item");

const getItems = async(req,res)=>{
    try{
    const items = await Item.find({});
    res.json(items);
    }catch (error) {
    console.log(error);
    res.status(500).json({mesage:"Server Error"});
    }
}

const getItemById = async(req,res)=>{
    try{
    const item = await Item.findById(req.params.id);
    res.json(item);
    }catch (error) {
    console.log(error);
    res.status(500).json({mesage:"Server Error"});
    }
}

module.exports = {
    getItems,getItemById
}