const express = require('express');
const app = express();
const BankData = require('../models/BankData');

const addBankUser = async (req, res) => {
    const { cnic, cardNo, balance, accNo } = req.body;

  // Validate non-negative values
    if (cnic < 0 || cardNo < 0 || balance < 0 || accNo < 0) {
        return res.status(400).json({ status: 'Error', message: 'Invalid data. Values must be non-negative.' });
    }
    
    try {
      const bankData = await BankData.create(req.body);
      res.status(201).json({ status: 'Success', bankData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Failed to add bank data' });
    }
  }
  
  module.exports = addBankUser;