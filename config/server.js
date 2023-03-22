import express from 'express'
import bodyParser from 'body-parser';
import responses from './responses.json';
export function start(port){
  const app = express()
  let server
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:true}))

  app.post('/auth', function(req, res){
    const  {login, password} = req.body

    if(!login && !password)
      res.status(400).send(responses.auth.empty)
   else  if(login === process.env.LOGIN && password === process.env.PASSWORD)
      res.status(200).send(responses.auth.correct) //fake token lyuboy
    else
      res.status(404).send(responses.auth.incorrect)
  })

  app.get('/config', function (req, res){
    res.status(200).send({number_of_entries:25, initial_amount:1000})
  })

  app.patch('/config', function (req, res){
    const {number_of_entries, initial_amount} = req.body
    if (!number_of_entries &&  !initial_amount)
      res.status(200).send({number_of_entries:25, initial_amount:1000})
    else if (number_of_entries &&  initial_amount)
      res.status(200).send({number_of_entries:number_of_entries, initial_amount:initial_amount})
    else if (number_of_entries < 5)
      res.status(400).send({message: 'Number of entries must be between 5 and 25 (inclusively).'})
    else if (number_of_entries > 25)
      res.status(400).send({message: 'Number of entries must be between 5 and 25 (inclusively).'})
  })

  app.post('/users', function (req, res){
    res.status(200).send(responses.users.user)
  })

  app.delete('/users', function (req, res){
const  {id} = req.body
    if (id === responses.users.user.id)
      res.status(200).send(responses.users.delete)
    else
      res.status(400).send(responses.users.notFound)
  })

  app.get('/users', function (req, res){
    const  {id} = req.query
    if(id === responses.users.user.id)
      res.status(200).send(responses.users.user)
    else if (id)
      res.status(400).send(responses.users.notFound)
    else
      res.status(200).send(responses.users.all)
  })

  before(function(){
    server = app.listen(port)
    console.log(`Mock server is running on ${port}`)
  })
  after(function(){
    server.close()
    console.log('Mock server has stopped')
  })
}
