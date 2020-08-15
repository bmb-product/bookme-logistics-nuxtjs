// https://aslamdoctor.com/blog/simple-crud-app-using-express-nuxtjs-using-servermiddleware-part-1-2/239
const express = require('express')

// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Require & Import API routes
const quotes = require('./routes/quotes')
// const articles = require('./routes/articles')

// Use API Routes
app.use(quotes)
// app.use(articles)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app,
}
