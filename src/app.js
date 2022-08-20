const express = require('express')
const { dbConfig } = require('./config')



const app = express()

dbConfig()

module.exports={app}
