//// modules ////
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')

// files
const routes = require('./routes')
require('./config/mongoose')

// hbs
app.engine('hbs', exphbs({ default: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// body-parser
app.use(express.urlencoded({ extended: true }))

// method-override
app.use(methodOverride('_method'))

// session
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))


//// routes ////
// index
app.use('/', routes)

// listen port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}.`)
})