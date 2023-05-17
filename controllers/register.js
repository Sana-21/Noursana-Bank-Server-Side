const express = require('express');
const app = express();
const User = require('../models/UserDetails');
const BankData = require('../models/BankData')

const registerUser = async (req, res) => {
  const { loginId, email, password, cnic} = req.body;
  try {
    const bankData = await BankData.findOne({ cnic });

    if (!bankData) {
      return res.send({ status: 'BankData not found' });
    }

    // Create a new User document and assign the bankData value
    await User.create({
      loginId,
      email,
      password,
      bankData: bankData._id,
    });

    res.send({ status: 'OK' });
  } catch (error) {
    res.send({ status: 'Error' });
  }
}
module.exports = registerUser;