
require('dotenv').config()

const express = require('express')
const server = express()

server.use(express.json())

const PORT = process.env.PORT || 9000;

server.listen(PORT, () =>{
    console.log(`*~*~* listening on port ${PORT} *~*~*`)
})

server.get('/hello', (req, res) => {
    res.json({ message: 'hello'})
})