const express = require('express');
const app = express();
const BankData = require('../models/BankData');
app.use(express.json()); // enable parsing of JSON request bodies

// GET endpoint to fetch all bank data
app.get('/bankData', async (req, res) => {
    try {
      const bankData = await BankData.find();
      res.status(200).json({ status: 'Success', bankData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Failed to fetch bank data' });
    }
  });
  
  module.exports = app;