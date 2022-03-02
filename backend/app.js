const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

app.use('/', require('./routes/calendarRoutes'))
app.get('/', (req, res)=>{
        res.send("Hi! Hello! uio");
})

const PORT = process.env.PORT || 5000

const MONGOOSE_URL = process.env.CONNECTION_URL

mongoose.connect(MONGOOSE_URL, {useNewUrlParser: true})
        .then(app.listen(PORT, (req, res)=>{console.log(`Server started at ${PORT}`)}))
        .catch((error)=>console.log(error))

