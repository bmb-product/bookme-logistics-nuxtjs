// const config = require('../config')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const QuotesController = require('../controllers/QuotesController')

// Register
// router.post('/quotes', QuotesController.create)

// // Login
// router.get('/quotes', QuotesController.index)
// router.get('/quotes/me', QuotesController.me)
router.post('/quotes', QuotesController.create)

module.exports = router
