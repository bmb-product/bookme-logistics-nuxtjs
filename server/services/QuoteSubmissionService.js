let BaseService = require('./BaseService')

class QuoteSubmissionService extends BaseService {
  objectPath() {
    return '/quote/submissions'
  }

  paramWrapper() {
    return 'quote_submission'
  }
}

module.exports = QuoteSubmissionService
