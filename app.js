const express = require ('express')
const mongoose = require('mongoose')
const url ='mongodb://localhost/SuyashDB'


const app= express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () =>{ console.log('connected...')})

app.use(express.json())

const firstrouter =require('../CRUDJS/routers/first')
app.use('/first',firstrouter)

app.listen(9000,() =>{console.log('server started')})