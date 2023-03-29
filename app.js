// modules
const express = require('express')
const app = express()

// route
app.get('/', (req, res) => {
  res.send('start')
})

// listen port
const port = 3000
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}.`)
})