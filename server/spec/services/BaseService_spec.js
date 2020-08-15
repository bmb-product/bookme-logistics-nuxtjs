const BaseService = require('../../services/BaseService')
const BaseNetwork = require('../../networks/BaseNetwork')

let network = new BaseNetwork('mytoken')

describe('BaseService', () => {
  it('define http attributes', () => {
    let service = new BaseService(network)
    expect(typeof service.network).toEqual('object')
  })

  it('define response attributes', () => {
    let service = new BaseService()
    expect(typeof service.response).toEqual('object')
  })

  it('throw exception when calling objectPath()', () => {
    let service = new BaseService()
    expect(() => {
      service.objectPath()
    }).toThrow()
  })
})

describe('BaseService#buildData', () => {
  it('return data with without param wrapper', () => {
    let quote = new BaseService()
    let requestData = quote.buildData({ key1: 'value1' })
    expect(requestData).toEqual({ key1: 'value1' })
  })
})
