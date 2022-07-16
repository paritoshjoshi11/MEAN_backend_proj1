const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors') // to connect angular app to db and send api request
const mongoose=require('./db.js')
const routes=require('./routes/route.js')

const app=express()

app.use(bodyparser.json()) //help json data to send it to api
app.use(cors({origin:'http://localhost:4000'}))
app.listen(3000,()=>console.log('server started at port : 3000'))

app.use('/employees',routes)