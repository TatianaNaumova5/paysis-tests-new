import express from 'express'

export function start(port){
  const app=express()
  let server

  app.post('/auth', function (req, res){
const  {login, password} = reg.body
    if(!login && !password)
      res.status(400).send({messare: 'No credentials provided.'})
    if(login === process.env.LOGIN && password === process.env.PASSWORD)
      res.status(200).send({token: 'e6ff1560-6600-49a6-8188-8a049cf5f35d'}) //fake token lyuboy
    else
      res.status(404).send({message: 'Wrong login or password.'})
  })

  before(function (){
    server = app.listen(port)
    console.log(`Mock server is running on ${port}`)
  })
  after(function (){
    server.close()
    console.log('Mock server has stopped')
  })
}
