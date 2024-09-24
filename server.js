// importanto o EXPRESS lib - framework
import express from 'express'

const app = express() 

const users = []

//criando uma rota (verbos HTTP) para REQ - RES 
app.post('/user')



app.get('/usuarios', (req, res) =>{// 1- tipo - metodo http 
    res.send('Funcionou')
})

app.listen(3000)

// 2 - endereço da rota 

// Criar api de usuarios
// Criar 
// Listar 
// Editar 
// Deletar
