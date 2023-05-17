const express = require('express');
const app = express();
const User = require('../models/UserDetails');
const BankData = require('../models/BankData');

const registerUser = async (req, res) => {
  const { loginId, password, email, cnic, name, cardNo } = req.body;
  try {
    const user = await BankData.findOne({ name, cnic, cardNo });

    if (!user) {
      return res.send({ status: 'BankData not found' });
    }

    // Create a new User document and assign the bankData value
    const newUser = new User({
      loginId,
      email,
      password,
      bankData: user._id,
    });

    await newUser.save();

    res.send({ status: 'OK' });
  } catch (error) {
    console.error(error);
    res.send({ status: 'Error' });
  }
};

module.exports = registerUser;
