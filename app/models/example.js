const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
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
  // image: {
  //   type: String,
  //   required: true
  // },
  // beer: beer,
  // reference user here
  token: String
}, {
  timestamps: true,
  toObject: {
    // remove `hashedPassword` field when we call `.toObject`
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

module.exports = mongoose.model('Example', exampleSchema)
