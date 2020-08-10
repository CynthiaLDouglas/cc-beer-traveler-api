const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  abv: {
    type: Number,
    required: false
  },
  ibu: {
    type: Number,
    required: false,
    min: 5,
    max: 120
  },
  description: {
    type: String,
    required: false
  }
})

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
    required: true
  },
  stateLoc: {
    type: String,
    required: true
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
  beers: [beerSchema],
  // image: {
  //   type: String,
  //   required: true
  // },
  token: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
