const router = require("express").Router()
const dotenv = require("dotenv")
dotenv.config()
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const ICCRAuth = require('../../../Models/ICCR/Auth')


router.post('/register', async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    try{

        const newCred = new ICCRAuth({
            username : username,
            password : CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString(),//Encryptes Password,
            last_login : new Date()
        })

        const ICCR = await newCred.save()
        res.json("ICCR Account Created")

    }catch(err){
        console.log(err)
        res.json(err)
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

            res.json("Login Successful")
        }
        else{
            res.json("Invalid Password")
        }

    }catch(err){
        console.log(err)
        res.json("Invalid Username")
    }

})




module.exports = router
