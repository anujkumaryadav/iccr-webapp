const router = require("express").Router()
const dotenv = require("dotenv")
dotenv.config()
const CryptoJS = require('crypto-js')
const Event = require('../../../Models/Event/Event')


router.post('/requestEvent', async (req, res) => {

    const featured = req.body.featured
    const eventTitle = req.body.eventTitle
    const eventDesc = req.body.eventDesc
    const isApproved = false

    try{

        const newEvent = new Event({
            featured ,
            eventTitle ,
            eventDesc ,
            isApproved
        })

        const event = await newEvent.save()
        res.json("Event Requested ")

    }catch(err){
        console.log(err)
        res.json(err)
    }

    
})


router.get('/getEvents', async (req, res) => {


    try{

        const events = await Event.findOne({ isApproved:false })
        res.json(events)


    }catch(err){
        console.log(err)
        res.json(err)
    }

    
})



module.exports = router
