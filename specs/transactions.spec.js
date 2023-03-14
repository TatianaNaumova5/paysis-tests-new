import {user, transaction} from '../helpers'
import {expect} from 'chai';

describe('Transactions', ()=>{
  describe('Create', ()=>{
    describe('With correct data', ()=> {
      let sender
      let receiver
      let response
      const amount = 100

      before(async ()=>{
        sender = (await  user.create()).body // distructive prisvoenie
        receiver = (await  user.create()).body
        response = await  transaction.create(sender.id, receiver.id, amount)
      })

      it('Response status code is 200', () => {
        expect(response.statusCode).to.eq(200)
      })

      it('Response body returns transaction id', () => {
        expect(response.body.id).to.be.a('string')
      })

      it('Response body returns sender id', () => {
        expect(response.body.from).to.eq(sender.id)
      })

      it('Response body returns receiver id', () => {
        expect(response.body.to).to.eq(receiver.id)
      })

      it('Response body returns amount', () => {
        expect(response.body.amount).to.eq(amount)
      })

      it('Sender\'s balance has decreased', async ()=>{
        const {body} = await user.get(sender.id)
        await expect(body.amount).to.eq(sender.amount - amount)
      })

      it('Receiver\'s balance has increased', async ()=>{
        const {body} = await user.get(receiver.id)
        await expect(body.amount).to.eq(receiver.amount + amount)
      })
    })
  })

  describe('Get', ()=> {
    describe('By correct id', () => {
      let from
      let to
      let transactionId
      let response
      const amount = 100

      before(async ()=>{
        from = (await user.create()).body.id
        to = (await user.create()).body.id
       transactionId = (await transaction.create(from, to, amount)).body.id
        response = await transaction.get(transactionId)
      })

      it('Response status code 200', () => {
        expect(response.statusCode).to.eq(200)
      })

      it('Response body contains transaction id', () => {
        expect(response.body.id).to.eq(transactionId)
      })

      it('Response body contains sender id', () => {
        expect(response.body.from).to.eq(from)
      })

      it('Response body contains receiver id', () => {
        expect(response.body.to).to.eq(to)
      })

      it('Response body contains amount', () => {
        expect(response.body.amount).to.eq(amount)
      })
    })

    describe('By incorrect id', () => {
      let response

      before(async ()=>{
        response = await transaction.get('incorrect')
      })

      it('Response status code 400', () => {
        expect(response.statusCode).to.eq(400)
      })

      it('Response body contains error message', () => {
        expect(response.body.message).to.eq('No transaction found.')
      })

      it('Response body contains error message', () => {
        expect(response.body.message).to.be.a('string')
      })
    })
  })
})
