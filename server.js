const express = require('express')
const Contenedor = require('./products')


let fileName  = './productos.txt'

let c1 = new Contenedor(`${__dirname,fileName}`)

const PORT = 8080

const app = express()

const server = app.listen(PORT, () => {
console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

app.get('/productos', (req, res) => {
  res.send(c1.getAll())
})

let cantVisitas = 0
app.get('/visitas', (req, res) => {
cantVisitas++
res.send('La cantidad de visitas de este endpoint es de ' + cantVisitas)
})

app.get('/fyh', (req, res) => {
res.send({fechayhora: new Date().toLocaleString()})
}) 