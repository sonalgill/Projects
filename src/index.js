const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const app = express()

app.use(express.json())


mongoose.connect("mongodb+srv://sonal-plutonium:5dJokPsnG43EGYHE@cluster0.koc4qx2.mongodb.net/College-Intern", {
    useNewUrlParser: true
})
.then(() => {
        console.log('MongoDB is connected on 27017')
    })
.catch((err) => {
        console.log(err)
    })



app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app is running on port ' + (process.env.PORT || 3000))
})