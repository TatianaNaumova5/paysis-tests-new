import {expect} from 'chai';
import {config} from '../helpers';

describe('Get config', async ()=>{
  let response
  before(async ()=> {
    response = await config.getConfig()
  })

  it('Response status code 200', () => {
    expect(response.statusCode).to.eq(200)
  })

  it('Response body returns number_of_entries', ()=>{
    expect(response.body.number_of_entries).to.be.a('number')
  })

  it('Response body returns initial_amount', ()=>{
    expect(response.body.initial_amount).to.be.a('number')
  })
})
describe('Patch config', async ()=> {
  let response

  before(async () => {
    response = await config.patch()
  })

  it('Response status code 200', () => {
    expect(response.statusCode).to.eq(200)
  })

  it('Response body returns number_of_entries', () => {
    expect(response.body.number_of_entries).to.be.a('number')
  })

  it('Response body returns initial_amount', () => {
    expect(response.body.initial_amount).to.be.a('number')
  })

  describe('Both zero values - should not change config', () => {
    let response
    let entries = 0,
      amount = 0

    before(async function () {
      response = await config.patch(entries, amount)
    })

    it('Should return status code 200', () => {
      expect(response.statusCode).equal(200)
    })

    it('Should not change number of entries', () => {
      expect(response.body.number_of_entries).to.be.a('number')
    })

    it('Should not change initial amount of user credits', () => {
      expect(response.body.initial_amount).to.be.a('number')
    })

    })
    })


