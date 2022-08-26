const router = require("express").Router()
const dotenv = require("dotenv")
dotenv.config()
const CryptoJS = require('crypto-js')
const ROAuth = require('../../../Models/RO/Auth')


router.post('/register', async (req, res) => {

    const officeName = req.body.officeName
    const password = req.body.password
    const eventsCompleted = req.body.eventsCompleted
    const extraEvents = req.body.extraEvents

    try{

        const newCred = new ROAuth({
            officeName : officeName,
            password : CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString(),//Encryptes Password,
            eventsCompleted : eventsCompleted,
            extraEvents : extraEvents,
            last_login : new Date()
        })

        const RO = await newCred.save()
        res.json("RO Account Created")

    }catch(err){
        console.log(err)
        res.json(err)
    }

    
})


router.post('/login', async (req, res) => {

    const officeName = req.body.officeName
    const password = req.body.password


    try{
        const RO = await ROAuth.findOne({ officeName : officeName })

        var bytes = CryptoJS.AES.decrypt(RO.password, process.env.SECRET_KEY); //Decrypt the Encrypted Password
        var originalPass = bytes.toString(CryptoJS.enc.Utf8); //Original Password

        if( password == originalPass ){

            const newLogin = await RO.updateOne({ officeName : officeName } , {
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
        res.status(401).json("Invalid officeName")
    }

})


router.get('/getRating', async (req, res) => {

    const officeName = req.query.officeName
    console.log(officeName)


    try{
        const RO = await ROAuth.findOne({ officeName : officeName })

        let ratings = 0 

        let eventCompleted = RO.eventsCompleted 
        let extraEvents = RO.extraEvents 
        ratings = ((eventCompleted* 5 + extraEvents * 5) / 100) * 5
        res.json( {ratings , eventCompleted , extraEvents } )

    }catch(err){
        console.log(err)
        console.log(err)
        res.status(401).json("Invalid officeName")
    }

})



module.exports = router
