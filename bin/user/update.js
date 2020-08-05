'use strict'

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/mongoose-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

const User = require('./../../app/models/user.js')

const userInputId = process.argv[2]
const userInputKey = process.argv[3]
const userInputValue = process.argv[4]

// node bin/person/update.js  db938d12087a9c38ca27b7792238da3b
