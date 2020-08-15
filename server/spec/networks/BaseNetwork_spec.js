let BaseNetwork = require('../../networks/BaseNetwork')
let jwttoken = require('../../libs/JwtGenerator')

describe('BaseNetwork', () => {
  it('set authToken attributes', () => {
    let appToken = jwttoken.encode()
    let network = new BaseNetwork(appToken)
    expect(network.authToken).toEqual(appToken)
  })

  it('set conn attributes', () => {
    let appToken = jwttoken.encode()
    let network = new BaseNetwork(appToken)
    expect(typeof network.http).toEqual('function')
  })

  it('return custom options ', () => {
    let appToken = jwttoken.encode()
    let network = new BaseNetwork(appToken)
    let result = network.httpOptions()

    expect(typeof result.baseURL).toEqual('string')
    expect(typeof result.timeout).toEqual('number')
    expect(typeof result.headers).toEqual('object')

    expect(result.headers['CLIENT_NAME']).toEqual('NXT-Logistics')
    expect(result.headers['Authorization']).toEqual(`Bearer ${appToken}`)
  })

  it('return defaultHeaders', () => {
    let appToken = jwttoken.encode()
    let network = new BaseNetwork(appToken)
    let headers = network.defaultHeaders()
    console.log('headers', headers)

    expect(typeof headers['Authorization']).toEqual('string')
    expect(headers['Authorization'].indexOf('Bearer ')).toEqual(0)
  })
})
