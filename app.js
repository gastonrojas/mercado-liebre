const express = require('express');
const path = require('path')

const app = express();

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./views/home.html'))
})

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve('./views/register.html'))
})

app.post('/register',(req, res)=>{   
    res.redirect('/')
})

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve('./views/login.html'))
})

app.post('/login',(req, res)=>{   
    res.redirect('/')
})

                  
const connectedServer = app.listen(3000, ()=> console.log(`Servidor express escuchando en el puerto ${connectedServer.address().port}`))