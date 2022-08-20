const express = require('express')
const { dbConfig } = require('./config')
const authRouter = require('./router/auth')
const path = require('path');
const fileUpload = require('express-fileupload');
const session = require('express-session');

const app = express()

dbConfig()

app.use(session({ secret: 'saranvlmna' }))
app.use(fileUpload());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', authRouter)

module.exports = { app }
