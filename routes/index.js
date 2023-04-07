// modules
const express = require('express')
const router = express.Router()

// files
const home = require('./modules/home')
const todos = require('./modules/todos')

// routes
router.use('/', home)
router.use('/todos', todos)

// exports
module.exports = router