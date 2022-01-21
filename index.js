
require('dotenv').config()

const express = require('express')
const server = express()

server.use(express.json())

server.get('/hello', (req, res) => {
    res.json({ message: 'hello'})
})

server.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to Sammi's deployed app!</h1>
    `)
})

const PORT = process.env.PORT || 9000;

server.listen(PORT, () =>{
    console.log(`*~*~* listening on port ${PORT} *~*~*`)
})