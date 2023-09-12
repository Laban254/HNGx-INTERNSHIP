const dotenv =require('dotenv').config();
const express = require('express');
const router = require('./routes/person.js');
const mongoose = require('mongoose');
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

//routes 
app.use('/api/persons', router);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
