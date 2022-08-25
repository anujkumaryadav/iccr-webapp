const mongoose = require("mongoose")

const AuthSchema = new mongoose.Schema({
    fullName : { type:String , required:true},
    email : { type:String , required:true},
    countryOfOrigin : { type:String , required:true},
    gender : { type:String , required:true},
    hospitalAccomodity : { type:String , required:true},
})

    module.exports = mongoose.model("Student", AuthSchema); //will create a Schema Name User Which can be Accessed using 'new' keyword just like creating object