// modules
const express = require('express')
const router = express.Router()

// files
const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')

// routes
router.use('/', home)
router.use('/todos', todos)
router.use('/users', users)

// exports
module.exports = router