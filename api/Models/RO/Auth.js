const mongoose = require("mongoose")

const AuthSchema = new mongoose.Schema({
    officeName : { type:String , required:true},
    password : { type:String , required:true},
    last_login : { type:Date , required:true }
})

    module.exports = mongoose.model("RO", AuthSchema); //will create a Schema Name User Which can be Accessed using 'new' keyword just like creating object