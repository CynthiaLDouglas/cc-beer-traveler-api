const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
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

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  cityLoc: {
    type: String,
    required: false
  },
  stateLoc: {
    type: String,
    required: false
  },
  posts: [postSchema],
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

const User = mongoose.model('User', userSchema)

module.exports = User
