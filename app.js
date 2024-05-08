const express = require('express')

const app = express()
const itemRouter = require('./routers/items-router')

app.get('/', (req, res) => {
    res.send('Hello expresss export')
})

app.use(express.json())

// router
app.use('/v1', itemRouter)

module.exports = app