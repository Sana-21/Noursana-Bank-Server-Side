const express = require('express');
const router = express.Router();
const BankData = require('../models/BankData');
const UserData = require('../models/UserDetails');
const CurrentUser = require('../models/CurrentUser');

const getAcc = async (req, res) => {
  try {
    const u = await CurrentUser.findOne();
    const curr = await UserData.findOne({ _id: u.currentUser });

    const currbank = await BankData.findOne({ _id: curr.bankData });

    res.status(200).json(currbank.accNo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch bank data' });
  }
};

module.exports = getAcc;
