const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({
  chatStartTime: {
    type: Date,
    required: true,
  },
  chatEndTime: {
    type: Date,
    required: true,
  },
  chattingTime: {
    type: Number,
  },
  guest: {
    type: String,
    required: true,
  },
  counselor: {
    type: String,
    required: true,
  },
})

const Room = mongoose.model('room', roomSchema)

module.exports = { Room }
