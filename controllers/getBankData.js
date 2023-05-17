const express = require('express');
const app = express();
const BankData = require('../models/BankData');
const getBankData = async (req, res) => {
    try {
      const bankData = await BankData.find();
      res.status(200).json({ status: 'Success', bankData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Failed to fetch bank data' });
    }
  }
  
  module.exports = getBankData;