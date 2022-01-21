const express = require('express');
const port = 8000

const app = express();

const start = (req,res)=>{
   res.send("node project start")
}

app.use(start)


app.listen(port,()=>{
    console.log(`node project listening on ${port}`)
});