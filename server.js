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


app.get('/productoRandom', (req, res) => {
 
  let cantVisitas = c1.getById(1)
  res.send('La  ' + cantVisitas)
})

app.get('/fyh', (req, res) => {
res.send({fechayhora: new Date().toLocaleString()})
}) 