//// modules ////
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Todo = require('./models/todo')
const methodOverride = require('method-override')
const routes = require('./routes')


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


// method-override
app.use(methodOverride('_method'))


//// routes ////
// index
app.use('/', routes)
  

// listen port
const port = 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}.`)
})
