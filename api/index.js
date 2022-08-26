const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors");


// res.header( "Access-Control-Allow-Origin" );

const authRoute = require("../api/Routes/ICCR/Authentication/Auth")
const StudentAuthRoute = require("../api/Routes/Student/Authentication/Auth")
const ROAuthRoute = require("../api/Routes/RO/Authenticatiom/Auth")
const ROEventRoute = require("../api/Routes/RO/Event/Events")


dotenv.config();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB COnnection Succesful"));
  }


app.use(express.json())

app.use("/auth" , authRoute)
app.use("/studentAuth" , StudentAuthRoute)
app.use("/ROAuth" , ROAuthRoute)
app.use("/ROEvent" , ROEventRoute)


app.listen( 8001 , ()=>{
    console.log( "Backend Server is Running" );
})