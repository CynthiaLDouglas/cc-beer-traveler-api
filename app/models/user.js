const mongoose = require('mongoose')

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
  // firstName: {
  //   type: String,
  //   required: false
  // },
  // lastName: {
  //   type: String,
  //   required: false
  // },
  // cityLoc: {
  //   type: String,
  //   required: false
  // },
  // stateLoc: {
  //   type: String,
  //   required: false
  // },
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
