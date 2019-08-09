'use strict'
const express = require('express')

const app = express() //server
const bodyParser = require ('body-parser') //json
const port = process.env.PORT || 3000; //puerto
const mongoose = require ('mongoose') //driver mongose
const Record = require ('./models/record')

app.use(bodyParser.urlencoded({ exttended: false}))
app.use(bodyParser.json())

/*app.get('/:name', (req, res)=> { //peticion  GET
  res.send({message : `Hola ${req.params.name}`})
})*/

app.get('/api/record', (req, res) => {
  res.send(200, {record: []})
})
app.get('/api/record/:id', (req, res) => {

})

app.post ('/api/record' , (req, res) =>{
  console.log('post /api/record')
  console.log(req.body)
  //res.status(200).send(req.body)

  let record = new Record()
  record.text1 = req.body.text1
  record.text2 = req.body.text2
  record.num1 = req.body.num1
  record.num2 = req.body.num2
  record.device = req.body.device
  record.user = req.body.user

  record.save((err ,  recordStored)=>{
    if (err) res.status(500).send({message: `ERROR al guardar en base de datos: ${err}`})
    res.status(200).send({record: recordStored})
  })
})

app.put('/api/record/:id', (req , res)=>{

})

app.delete('/api/record/:id', (req, res) => {

})


mongoose.connect('mongodb://localhost:27017/shop', (err, res) =>{
  if (err) {
    return console.log('Error al conectar a MONGO DB');
  }
  console.log('conectado a MONGODB');

  app.listen(port, ()=> {
    console.log(`API REST corriendo en puerto: ${port}`)
  })
})


//``

/* docker run --name mongoContainerMain -v /home/norellanac/Documentos/javascript/mongo/apiRest/mongoVolDocker/:/data/db -p 27017:27017 -d mongo
*/
