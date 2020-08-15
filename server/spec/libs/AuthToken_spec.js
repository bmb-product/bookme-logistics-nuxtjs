const AuthToken = require('../../libs/AuthToken')

describe('authToken', () => {
  it('', () => {
    let token = AuthToken.authToken()
    // console.log('token:---------------------', token)
    expect(typeof token).toEqual('string')
  })
})
