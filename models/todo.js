// modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// schema
const todoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean, 
    default: false
  }
})

// exports
module.exports = mongoose.model('Todo', todoSchema)