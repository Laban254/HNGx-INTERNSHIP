const Person = require('../models/personModel')
const mongoose = require('mongoose')

module.exports = {

//creates a new person in the database
  creatPerson: async (req, res) => {
    const {name, age, gender} = req.body

    let emptyFields = []

    if (!name) {
    emptyFields.push('title')
    }
    if (!age) {
    emptyFields.push('load')
    }
    if (!gender) {
    emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }

    // add a new person  to the database
    try {
        const person = await Person.create({ name, age, gender })
        res.status(200).json(person)
    } catch (error) {
        res.status(400).json({ error: error.message })
  }
},


// gets a person from the database by their id
  getPerson: async(req, res) => {
    const { user_id } = req.params

    // Check if the provided user_id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(404).json({error: 'the id provided is not availlable '})
    }
    const person = await Person.findById(user_id)

    if (!person) {
        return res.status(404).json({error: 'No such user person'})
  }

  res.status(200).json(person)
},

// updates the user profile in the database
  updatePerson: async (req, res) => {
     const { user_id} = req.params

    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({error: 'No such person'})
    }

    const person = await Person.findOneAndUpdate({_id: user_id}, {
        ...req.body
    })

    if (!person) {
        return res.status(400).json({error: 'No such person'})
     }

    res.status(200).json(person)
  },


  // deletes a person from the database by their id
  delPerson: async(req, res) => {
    const { user_id } = req.params

    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(400).json({error: 'No such workout'})
    }

    const person = await Person.findOneAndDelete({_id: user_id})

    if(!person) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(person)
}
};

