//require('dotenv').configure()
const express = require('express') 
const app = express()
const routes = require('./routes/tasks')

//middleware
app.use(express.json())


//routes
app.get('/ping', (req, res) => {
    res.send("pong")
})

app.use('/api/tasks',routes)

const port = 8000

app.listen(port, console.log(`server listening on port ${port}`))