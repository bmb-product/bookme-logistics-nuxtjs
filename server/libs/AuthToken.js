const jwtToken = require('./JwtGenerator')
module.exports.authToken = function () {
  const token = jwtToken.encode()
  return token
}
