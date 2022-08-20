const express = require('express')
const { dbConfig } = require('./config')
const authRouter=require('./router/auth')



const app = express()

dbConfig()

app.use(express.json());

app.use('/auth',authRouter)

module.exports={app}
