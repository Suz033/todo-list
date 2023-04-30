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
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})

// exports
module.exports = mongoose.model('Todo', todoSchema)