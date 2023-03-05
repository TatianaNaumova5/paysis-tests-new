import {expect} from 'chai'
import request from 'supertest'
import 'dotenv/config'

describe('Authentication positive', () => {
  it('Successful log in', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: process.env.LOGIN, password: process.env.PASSWORD})
    await expect(response.statusCode).to.eq(200)
  })

  it('Successful log in', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: process.env.LOGIN, password: process.env.PASSWORD})
    await expect(response.body.token).not.to.be.null
  })

  it('Successful log in token is a string', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: process.env.LOGIN, password: process.env.PASSWORD})
    await expect(response.body.token).to.be.a('string')
  })
})

describe('Authentication negative', () => {
  it('Log in with wrong login', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: 'admin888', password: process.env.PASSWORD})
    await expect(response.statusCode).to.eq(404)
  })

  it('Log in with wrong login', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: 'admin888', password: process.env.PASSWORD})
    await expect(response.body.message).to.eq('Wrong login or password.')
  })

  it('Log in with wrong login', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: 'admin888', password: process.env.PASSWORD})
    await expect(response.body.token).to.be.undefined
  })

  it('Uncceassful log in with wrong end point', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth111')
      .send({login: process.env.LOGIN, password: process.env.PASSWORD})
    await expect(response.statusCode).to.eq(404)
  })
})
