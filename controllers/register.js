const express = require('express');
const app = express();
const User = require('../models/UserDetails');
const BankData = require('../models/BankData')

app.use(express.json()); // enable parsing of JSON request bodies

app.post('/register', async (req, res) => {
  
  const { loginId, email, password, cnic } = req.body;
  console.log('CNIC:', cnic);
  const bankData = await BankData.findById(cnic.toString());
  
  if (!bankData) {
    return res.send({ status: 'Error', message: 'Bank data not found' });
  }
  try {
    await User.create({
      loginId,
      email,
      password,
      bankData: cnic,
    });
    res.send({ status: 'OK' });
  } catch (error) {
    res.send({ status: 'Error' });
  }
});

module.exports = app;
