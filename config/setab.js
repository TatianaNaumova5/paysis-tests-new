import request from 'supertest';

before(async  () =>{
  const response = await request(process.env.BASE_URL)
    .post('/auth')
    .send({login: process.env.LOGIN, password: process.env.PASSWORD})
  process.env['TOKEN'] = response.body.token
})