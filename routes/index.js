// modules
const express = require('express')
const router = express.Router()

// files
const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

// routes
router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/', authenticator, home)

// exports
module.exports = router