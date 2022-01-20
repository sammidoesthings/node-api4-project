
const express = require('express')
const server = express()

const PORT = 9000;

server.listen(PORT, () =>{
    console.log(`*~*~* listening on port ${PORT} *~*~*`)
})

server.get('/hello', (req, res) => {
    res.json({ message: 'hello'})
})