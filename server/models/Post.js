const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  par: {
    type: Number,
    default: 0
  },
  tracks: {
    type: Number,
    required: true
  }
})

const postSchema = new mongoose.Schema({
  track: {
    type: trackSchema,
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
