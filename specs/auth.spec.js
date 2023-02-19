import {expect} from 'chai';
import request from 'supertest';
describe('Authentication positive', () => {
  it('Successful log in', async ()=> {
    const response = await request('http://localhost:3000')
      .post('/auth')
      .send({login: 'admin', password: 'admin'})
    await expect(response.statusCode).to.eq(200)
  })

    it('Successful log in', async ()=> {
      const response = await request('http://localhost:3000')
        .post('/auth')
        .send({login: 'admin', password: 'admin'})
      await expect(response.body.token).not.to.be.null
    })

  it('Successful log in', async ()=> {
    const response = await request('http://localhost:3000')
      .post('/auth')
      .send({login: 'admin', password: 'admin'})
    await expect(response.body.token).to.be.a('string')
  })
})

describe('Authentication negative', () => {
  it('Log in with wrong login', async ()=> {
    const response = await request('http://localhost:3000')
      .post('/auth')
      .send({login: 'admin888', password: 'admin'})
    await expect(response.statusCode).to.eq(404)
  })

  it('Log in with wrong login', async ()=> {
    const response = await request('http://localhost:3000')
      .post('/auth')
      .send({login: 'admin888', password: 'admin'})
    await expect(response.body.token).to.be.null
  })

  it('Log in with wrong login', async ()=> {
    const response = await request('http://localhost:3000')
      .post('/auth')
      .send({login: 'admin888', password: 'admin'})
    await expect(response.body.message).to.eq('Wrong login or password.')
  })
})