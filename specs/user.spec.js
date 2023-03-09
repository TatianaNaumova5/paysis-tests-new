import {expect} from 'chai';
import {user} from '../helpers'
describe('User',()=> {
  describe('Create user', () => {
    let response

    before(async () => {
      response = await user.create()
    })

    it('Response status code 200', () => {
      expect(response.statusCode).to.eq(200)
    })

    it('Response body returns a user id', () => {
      expect(response.body.id).to.be.a('string')
    })

    it('Response body returns initial user amount', () => {
      expect(response.body.amount).to.be.a('number')
    })
  })

  describe('Delete user', () => {
    describe('Existing user', () => {
      let response

      before(async () => {
        const createUserResponse = await user.create()
        const userId = createUserResponse.body.id
        response = await user.delete(userId)
      })

      it('Response status code 200', () => {
        expect(response.statusCode).to.eq(200)
      })

      it('Response body returns a success message', () => {
        expect(response.body.message).to.eq('User deleted.')
      })

      it('Response body returns a success message', () => {
        expect(response.body.message).to.be.a('string')
      })
    })

    describe('Non-xisting user', () => {
      let response

      before(async () => {
        response = await user.delete('foobar')
      })

      it('Response status code 400', () => {
        expect(response.statusCode).to.eq(400)
      })

      it('Response body returns an error message', () => {
        expect(response.body.message).to.eq('No user found.')
      })

      it('Response body returns an error message', () => {
        expect(response.body.message).to.be.a('string')
      })
    })
  })
})