const express = require('express');

// Imports the controller functions for handling user operations
const { 
  creatPerson, 
  getPerson, 
  updatePerson, 
  delPerson } = require('../controllers/userController.js');

const router =  express.Router();

// Define routes for handling various user-related operations
router.post('/', creatPerson);  // Route to create a new person
router.get('/:user_id', getPerson);  // Route to get a person by their ID
router.put('/:user_id', updatePerson);  // Route to update a person's profile by their ID
router.delete('/:user_id', delPerson);  // Route to delete a person by their ID


module.exports = router;