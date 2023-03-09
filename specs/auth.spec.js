import {expect} from 'chai'
import {logIn} from '../helpers';

describe('Authentication positive', () => {
  describe('Succesful log in', ()=>{
    let response

    before(async  () =>{
      response = await logIn(process.env.LOGIN, process.env.PASSWORD)
    })

    it('Response status code is 200',  () => {
      expect(response.statusCode).to.eq(200)
    })

    it('Response body returnes a token',  () => {
      expect(response.body.token).not.to.be.null
    })

    it('Response body returnes a token',  () => {
      expect(response.body.token).to.be.a('string')
    })

    it('Successful log in token is not a number', () => {
      expect(response.body.token).not.to.be.a('number')
    })
  })
})

describe.skip('Authentication negative', () => {
  it('Log in with wrong login', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: 'test123', password: process.env.PASSWORD})
    await expect(response.statusCode).to.eq(404)
  })

  it('Log in with wrong password', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: process.env.LOGIN, password: 'test123'})
    await expect(response.statusCode).to.eq(404)
  })

  it('Log in with wrong login', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: 'test123', password: process.env.PASSWORD})
    await expect(response.body.message).to.eq('Wrong login or password.')
  })

  it('Log in with wrong login', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth')
      .send({login: 'test123', password: process.env.PASSWORD})
    await expect(response.body.token).to.be.undefined
  })

  it('Uncceassful log in with wrong end point', async () => {
    const response = await request(process.env.BASE_URL)
      .post('/auth111')
      .send({login: process.env.LOGIN, password: process.env.PASSWORD})
    await expect(response.statusCode).to.eq(404)
  })
})
