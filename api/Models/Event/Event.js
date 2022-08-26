const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    featured : { type:String , required:true},
    eventTitle : { type:String , required:true },
    eventDesc : { type:String , required:true },
    isApproved : { type:Boolean , required:true },

})

    module.exports = mongoose.model("Event", EventSchema); //will create a Schema Name User Which can be Accessed using 'new' keyword just like creating object