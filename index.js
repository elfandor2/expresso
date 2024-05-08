const app = require('./app')
const dotenv = require('dotenv')
const port = 9191

app.listen(port,(req, res) => {
    console.log("server running");
})