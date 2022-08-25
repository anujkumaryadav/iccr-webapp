const router = require("express").Router()
const dotenv = require("dotenv")
dotenv.config()
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const StudentAuth = require('../../../Models/Student/Auth')


router.post('/register', async (req, res) => {

    const fullName = req.body.fullName
    const email = req.body.email
    const countryOfOrigin = req.body.countryOfOrigin
    const gender = req.body.gender
    const hospitalAccomodity = req.body.hospitalAccomodity

    console.log(
        fullName,
        email,
        countryOfOrigin,
        gender,
        hospitalAccomodity   
    )

    try{

        const newCred = new StudentAuth({
            fullName ,
            last_login : new Date(),
            email ,
            countryOfOrigin ,
            gender ,
            hospitalAccomodity ,
        })

        const student = await newCred.save()
        res.status(200).json("Student Account Created")

    }catch(err){
        console.log(err)
        res.status(401).json(err)
    }

    
})


router.post('/login', async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    try{
        const ICCR = await ICCRAuth.findOne({ username : username })

        var bytes = CryptoJS.AES.decrypt(ICCR.password, process.env.SECRET_KEY); //Decrypt the Encrypted Password
        var originalPass = bytes.toString(CryptoJS.enc.Utf8); //Original Password

        if( password == originalPass ){

            const newLogin = await ICCRAuth.updateOne({ username : username } , {
                $set : {
                    "last_login" : new Date()
                }
            })

            res.status(200).json("Login Successful")
        }
        else{
            res.status(401).json("Invalid Password")
        }

    }catch(err){
        console.log(err)
        res.status(401).json("Invalid Username")
    }

})




module.exports = router
