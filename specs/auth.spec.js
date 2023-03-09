import {expect} from 'chai'
import {logIn} from '../helpers';

describe('Authentication positive', () => {
  describe('Log in with correct credentials', ()=>{
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

  describe('Log in with wrong login', ()=>{
    let response

    before(async  () =>{
      response = await logIn('invalid', process.env.PASSWORD)
    })

    it('Response status code is 404',  () => {
      expect(response.statusCode).to.eq(404)
    })

    it('Response body returnes an arror message',  () => {
      expect(response.body.message).to.eq('Wrong login or password.')
    })

    it('Response body returnes an arror message',  () => {
      expect(response.body.message).to.be.a('string')
    })
  })

  describe('Log in with wrong password', ()=>{
    let response

    before(async  () =>{
      response = await logIn(process.env.LOGIN, 'invalid')
    })

    it('Response status code is 404',  () => {
      expect(response.statusCode).to.eq(404)
    })

    it('Response body returnes an arror message',  () => {
      expect(response.body.message).to.eq('Wrong login or password.')
    })

    it('Response body returnes an arror message',  () => {
      expect(response.body.message).to.be.a('string')
    })
  })

  describe('Log in without credentials', ()=> {
    let response

    before(async () => {
      response = await logIn()
    })

    it('Response status code is 400', () => {
      expect(response.statusCode).to.eq(400)
    })

    it('Response body returnes an arror message', () => {
      expect(response.body.message).to.eq('No credentials provided.')
    })

    it('Response body returnes an arror message', () => {
      expect(response.body.message).to.be.a('string')
    })
  })
  })
