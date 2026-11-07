const express = require('express')
const app = express()
const port=3000
const path = require(`path`)

app.use(express.json())

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname , 'index.html'))
//  console.log(res , req)
})

app.post('/register' , (req , res) => {
    // const username = req.username
    const {username , fingerprint} = req.body
    console.log(username,fingerprint)
})

app.listen(port, () => {
 console.log(`Example app listening on ${port}`)
})

