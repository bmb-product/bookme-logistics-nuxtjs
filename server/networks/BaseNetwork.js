let axios = require('axios')

class BaseNetwork {
  constructor(authToken) {
    this.authToken = authToken
    this.http = axios.create(this.httpOptions())
  }

  httpOptions() {
    return {
      baseURL: process.env.BASE_URL,
      timeout: 1000,
      headers: this.defaultHeaders(),
    }
  }

  defaultHeaders() {
    let options = {
      CLIENT_NAME: 'NXT-Logistics',
      Authorization: `Bearer ${this.authToken}`,
    }

    return Object.assign(options, this.customHeaders())
  }

  customHeaders() {
    return {}
  }
}

module.exports = BaseNetwork
