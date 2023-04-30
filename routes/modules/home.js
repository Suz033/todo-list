// modules
const express = require('express')
const router = express.Router()

// files
const Todo = require('../../models/todo')

// routers
router.get('/', (req, res) => {
  const userId = req.user._id
  Todo.find({ userId })
    .lean()
    .sort({ _id: 'asc' })
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})

// exports
module.exports = router