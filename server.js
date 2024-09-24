// importanto o EXPRESS lib - framework
import express from 'express'

const app = express() 
app.use(express.json())




const users = []

//criando uma rota (verbos HTTP) para REQ - RES 
app.post('/usuarios', (req, res) =>{
    users.push(req.body)

    res.send('OK aqui deu certo')
})



app.get('/usuarios', (req, res) =>{// 1- tipo - metodo http 
    res.json(users)
   
})

app.listen(3000)

// 2 - endereço da rota 

// Criar api de usuarios
// Criar 
// Listar 
// Editar 
// Deletar
