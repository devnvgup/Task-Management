const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./router/taskRouter')


const app = express()
app.use(cors())
app.use(bodyParser.json());

app.use('/', router)

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to DB success');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err);
    })

