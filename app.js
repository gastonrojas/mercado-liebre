const express = require('express');
const path = require('path')

const app = express();

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./views/home.html'))
})

const connectedServer = app.listen(3000, ()=> console.log(`Servidor express escuchando en el puerto ${connectedServer.address().port}`))