import {expect} from 'chai'

describe('Math operations', () => {
  const a = 5
  const b = 7

  it('Additions works properly', () => {
    expect(a + b).to.eq(12)
  })

  it('Subtraction works properly', () => {
    expect(a - b).to.eq(-2)
  })
})
