const mongoose = require('mongoose')

// Creates a schema object using mongoose.Schema
const Schema = mongoose.Schema

// Defines a schema for the "Person" model
const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
}, { timestamps: true })

// Creates a Mongoose model for "Person" using the defined schema
module.exports = mongoose.model('Person', personSchema)