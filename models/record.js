'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecordSchema =Schema ({
  text1: String,
  text2: String,
  num1: {type: Number, default: 0},
  num2: {type: Number, default: 0},
  device: {type: Number, default: 0},
  user: {type: Number, default: 0},

})

module.exports = mongoose.model('Record', RecordSchema)
