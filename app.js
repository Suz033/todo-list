//// modules ////
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

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


//// routes ////
// index
app.use('/', routes)

// listen port
const port = 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}.`)
})