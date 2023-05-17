const express = require('express');
const app = express();
const users = require('../models/UserDetails');

const getRegUsers = async (req, res) => {
    try {
      const allusers = await users.find();
      res.status(200).json({ status: 'Success', allusers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: 'Failed to fetch bank data' });
    }
  }
  
  module.exports = getRegUsers;