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
describe('Patch config', async ()=>{
  let response

  before(async ()=> {
    response = await config.patch()
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
