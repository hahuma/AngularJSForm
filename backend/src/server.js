const express = require('express')
const mongoose = require('mongoose')
const { errors } = require('celebrate')
const cors = require('cors')
require('dotenv').config()

const routes = require('./routes')

const app = express();
const corsOptions = {
    origin: process.env.APP_URL
}


mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})



app.use(cors(corsOptions))
app.use(express.json())
app.use(errors())
app.use(routes)
app.listen(3333)

