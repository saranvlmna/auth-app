const express = require('express')
const controller = require('../controller/auth')
const user = express.Router()

// user.get('/signup', controller.signupForm)
// user.get('/login', controller.loginForm)

user.post('/signup', controller.signup)
user.post('/login', controller.login)


module.exports=user

