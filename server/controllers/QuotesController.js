const jwt = require('jsonwebtoken')

require('dotenv').config()

var AuthToken = require('../libs/AuthToken')
var BaseNetwork = require('../networks/BaseNetwork')
var QuoteSubmissionService = require('../services/QuoteSubmissionService')

// Get /me
module.exports.me = function (req, res) {
  var token = req.headers.authorization
  if (token) {
    // verifies secret and checks if the token is expired
    jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, function (
      err,
      decoded
    ) {
      if (err) {
        return res.status(401).json({ message: 'unauthorized' })
      } else {
        return res.json({ user: decoded })
      }
    })
  } else {
    return res.status(401).json({ message: 'unauthorized' })
  }
}

module.exports.test = function (req, res) {
  console.log('test: --------------------------')
  console.log('jwt secret----------------------', process.env.JWT_SECRET_KEY)
  res.status(200).json({ message: 'ok' })
}

module.exports.create = async function (req, res) {
  console.log('create controller')
  console.log('create request body', req.body)

  let authToken = AuthToken.authToken()
  console.log('access token: ----', authToken)

  let baseNetwork = new BaseNetwork(authToken)
  let quote = new QuoteSubmissionService(baseNetwork)

  console.log('sending request')

  let result = await quote.create(req.body)

  console.log('------------------done', result)
  res.status(quote.response.status).json(result)
}
