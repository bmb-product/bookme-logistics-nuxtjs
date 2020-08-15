const jwtGenerator = require('../../libs/JwtGenerator')

describe('encode', () => {
  it('return decodable token', () => {
    var payload = {
      jti: 'myawesome-jti',
    }

    let token = jwtGenerator.encode(payload)

    let result = jwtGenerator.decode(token)
    expect(token).not.toBeNull()
    expect(result['jti']).toEqual('myawesome-jti')
  })
})

describe('decode', () => {
  it('decode token and return payload', () => {
    var payload = {
      jti: 'myawesome-jti',
    }

    let token = jwtGenerator.encode(payload)
    let result = jwtGenerator.decode(token)

    expect(token).not.toBeNull()
    expect(result['jti']).toEqual('myawesome-jti')
  })

  it('throw JsonWebTokenError: jwt malformed', () => {
    expect(() => {
      jwtGenerator.decode('malformed-token')
    }).toThrow()
  })
})
