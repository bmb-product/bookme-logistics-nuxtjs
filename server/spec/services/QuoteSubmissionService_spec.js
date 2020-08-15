let QuoteSubmissionService = require('../../services/QuoteSubmissionService')

describe('QuoteSubmissionService#objectPath', () => {
  it('return /quotes', () => {
    let quote = new QuoteSubmissionService()
    let result = quote.objectPath()
    expect(result).toEqual('/quote/submissions')
  })
})

describe('QuoteSubmissionService#buildData', () => {
  it('return data with prefix', () => {
    let quote = new QuoteSubmissionService()
    let requestData = quote.buildData({ key1: 'value1' })
    expect(requestData).toEqual({ quote_submission: { key1: 'value1' } })
  })
})
