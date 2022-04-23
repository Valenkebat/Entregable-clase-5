const express = require('express')
const Contenedor = require('./products')


const fileName  = './productos.txt'
const c1 = new Contenedor(`${__dirname,fileName}`)

const PORT = 8080

const app = express()

const server = app.listen(PORT, () => {
console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

app.get('/productos', (req, res) => {
  const arr = c1.getAll()
  res.send(arr)
})

let cantVisitas = 0
app.get('/visitas', (req, res) => {
cantVisitas++
res.send('La cantidad de visitas de este endpoint es de ' + cantVisitas)
})

app.get('/fyh', (req, res) => {
res.send({fechayhora: new Date().toLocaleString()})
}) 