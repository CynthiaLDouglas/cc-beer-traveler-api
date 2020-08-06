const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  placeName: {
    type: String,
    required: true
  },
  cityLoc: {
    type: String,
    required: false
  },
  stateLoc: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: true,
    unique: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // image: {
  //   type: String,
  //   required: true
  // },
  // beer: beer,
  // reference user here
  token: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
