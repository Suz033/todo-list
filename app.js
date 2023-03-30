// modules
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Todo = require('./models/todo')

// dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URI)

// DB
const db = mongoose.connection
db.on('error', () => {
  console.log('=== mongodb error ===')
})
db.once('open', () => {
  console.log('=== mongodb connected ===')
})

// hbs
app.engine('hbs', exphbs({ default: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// body-parser
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
  Todo.find()
    .lean()
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))  
})

app.get('/todos/new', (req, res) => {
  res.render('new')
})

app.post('/todos', (req, res) => {
  const name = req.body.name

  return Todo.create({ name })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// listen port
const port = 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}.`)
})
