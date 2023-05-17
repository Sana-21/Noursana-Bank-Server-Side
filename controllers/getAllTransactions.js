const express = require('express');
const app = express();
const trans = require('../models/Transaction');
const getBankData = async (req, res) => {
    try {
      const t = await trans.find();
      res.status(200).json({ status: 'Success', t });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Failed to fetch bank data' });
    }
  }
  
  module.exports = getBankData;