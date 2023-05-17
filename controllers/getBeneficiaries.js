const express = require('express');
const app = express();
const beneficiaries = require('../models/Beneficiary');
const getBeneData = async (req, res) => {
    try {
      const bene = await beneficiaries.find();
      res.status(200).json({ status: 'Success', bene });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Failed to fetch bene data' });
    }
  }
  
  module.exports = getBeneData;