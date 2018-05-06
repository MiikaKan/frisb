const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  trackName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  players: {
    type: [String],
    required: true
  }
})

module.exports = mongoose.model('Post', postSchema)
