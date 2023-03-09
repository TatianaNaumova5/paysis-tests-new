import {expect} from 'chai';
import {user} from '../helpers'
describe('User',()=>{
  describe('Create new user', ()=>{
    let response

    before(async ()=>{
      response = await user.create()

    })

    it('Response status code 200',  ()=> {
       expect(response.statusCode).to.eq(200)
    })

    it('Response body returns a user id',  ()=> {
      expect(response.body.id).to.be.a('string')
    })

    it('Response body returns initial user amount',  ()=> {
       expect(response.body.amount).to.be.a('number')
    })
  })
})