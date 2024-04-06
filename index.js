require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/prabhakar',(req,res)=> {
    res.send("This is Prabhakar Section")
})
app.get('/login',(req,res)=> {
    res.send('<h1>This is Login Section</h1>')
})
app.get('/singh',(req,res)=> {
    res.send("<h6>SINGH</h6 >")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})