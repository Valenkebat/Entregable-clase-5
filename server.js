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
  let idRandom =  Math.floor(Math.random() * (4 - 1) + 1)
  console.log(idRandom)
  let p = c1.getById(idRandom)
  res.send('Producto Random  ' + `${'id: '+p.id+'\n'+'titulo: '+p.title+"\n" }`)
})
