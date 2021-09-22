const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    company:{
        type:String,
        
    },
    jobType:{
        type:String,
       
    },
    role:{
        type:String,
    
    },
    apply:{
        type:Boolean,
        default:false
    },
    source:{
        type:String,
       
    },
    img:{
        type:String,
       
    },
    deadline:{
        type:String,
    
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});
module.exports = Item = mongoose.model('item', ItemSchema);