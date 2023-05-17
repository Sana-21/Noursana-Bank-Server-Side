const express = require('express');
const app = express();
const users = require('../models/UserDetails');
app.use(express.json()); // enable parsing of JSON request bodies

// GET endpoint to fetch all bank data
app.get('/registeredusers', async (req, res) => {
    try {
      const allusers = await users.find();
      res.status(200).json({ status: 'Success', allusers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Failed to fetch bank data' });
    }
  });
  
  module.exports = app;