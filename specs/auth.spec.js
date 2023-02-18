import {expect} from 'chai';
import request from 'supertest';
describe('Authentication', () => {

  it('Successful log in', async ()=> {
    const response = await request('http://localhost:3000')
      .post('/auth')
      .send({login: 'admin', password: 'admin'})
    await expect(response.statusCode).to.eq(200)
  })

})