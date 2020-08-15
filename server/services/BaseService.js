let axios = require('@nuxtjs/axios')

class BaseService {
  constructor(network) {
    this.network = network
    this.response = null
  }

  async create(data) {
    let url = this.createUrl()
    console.log('httpOptions', this.network.httpOptions())
    console.log('url', url)
    try {
      this.response = await this.network.http.post(url, this.buildData(data))
      return this.response.data
    } catch (error) {
      // https://github.com/axios/axios#handling-errors
      this.response = error.response
      return this.response.data
    }
  }

  paramWrapper() {
    return ''
  }

  objectPath() {
    throw 'You must define an objectPath() to return a string of resource path'
  }

  createUrl() {
    return `${this.objectPath()}`
  }

  indexUrl() {
    return `${this.objectPath()}`
  }

  jsonResponse() {
    JSON.parse(this.response)
  }

  buildData(data) {
    if (this.paramWrapper()) {
      let result = {}
      result[this.paramWrapper()] = data
      return result
    }
    return data
  }
}

module.exports = BaseService
