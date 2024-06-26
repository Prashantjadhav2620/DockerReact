const mongoose = require("mongoose");

const userSChema = new mongoose.Schema({
    username:{
         type:String,
         require:true,
    },
    email:{
         type:String,
         require:true,
    },
    phone:{
         type:String,
         require:true,
    },
    password:{
         type:String,
         require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }

});

//define the model or the collection name

const User = new mongoose.model("User",userSChema);

module.exports =User;