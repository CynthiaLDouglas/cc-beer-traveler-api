'use strict'

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/mongoose-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

const User = require('./../../app/models/user.js')

const emailUserInput = process.argv[2]
const hashedPasswordUserInput = process.argv[3]
const firstNameUserInput = process.argv[4]
const lastNameUserInput = process.argv[5]
const cityLocUserInput = process.argv[6]
const stateLocUserInput = process.argv[7]

db.once('open', function () {
  User.create({
    email: emailUserInput,
    hashedPassword: hashedPasswordUserInput,
    firstName: firstNameUserInput,
    lastName: lastNameUserInput,
    cityLoc: cityLocUserInput,
    stateLoc: stateLocUserInput
  })
    .then(console.log)
    .catch(console.error)
    .finally(() => db.close())
})
