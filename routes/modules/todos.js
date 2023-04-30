// modules
const express = require('express')
const router = express.Router()

// files
const Todo = require('../../models/todo')

// routers
// todos
router.post('/', (req, res) => {
  const name = req.body.name
  const userId = req.user._id
  return Todo.create({ name, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// new
router.get('/new', (req, res) => {
  res.render('new')
})

// id
router.get('/:id', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Todo.findOne({ _id, userId })
    .lean()
    .then(todo => res.render('detail', { todo }))
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Todo.findOne({ _id, userId })
    .lean()
    .then(todo => res.render('edit', { todo }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  const { name, isDone } = req.body
  return Todo.findOne({ _id, userId })
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      return todo.save()
    })
    .then(() => res.redirect(`/`))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const _id = req.params.id
  const userId = req.user._id
  return Todo.findOne({ _id, userId })
    .then(todo => todo.deleteOne())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// exports
module.exports = router