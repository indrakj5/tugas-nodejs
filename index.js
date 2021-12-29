const express = require('express');
const cors = require('cors');
// const port = process.env.PORT || 3000;
const mysql = require('mysql');
const usersRouter = require('./routes/users');

app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors())

db = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'indrakj',
    database : 'berita'
})

// app.use('/', () => console.log('welcome'))

app.use('/users', usersRouter)

app.listen(3000, function(){
    console.log('connect port 3000')
})

