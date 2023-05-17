const express = require('express');
const app = express();
const user = require('../models/CurrentUser');
app.use(express.json()); // enable parsing of JSON request bodies

// GET endpoint to fetch all bank data
const getCurrentUser = async (req, res) => {
    try {
      const u = await user.find();
      res.status(200).json({ status: 'Success', u });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Failed to fetch bank data' });
    }
  }
  
  module.exports = getCurrentUser