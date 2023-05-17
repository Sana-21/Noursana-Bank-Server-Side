const express = require('express');
const router = express.Router();
const TransactionData = require('../models/Transaction');
const BankData = require('../models/BankData');
const UserData = require('../models/UserDetails');
const CurrentUser = require('../models/CurrentUser');

const getRegUsers = async (req, res) => {
  try {
    const u = await CurrentUser.findOne();
    const curr = await UserData.findOne({ _id: u.currentUser });

    if (!curr || !curr.transactions) {
      return res.status(404).json({ error: 'User transactions not found' });
    }

    const currTrans = curr.transactions;

    const transactions = await TransactionData.find().sort({ timestamp: 1 });

    const transactionDataArray = [];

    for (const transaction of transactions) {
      if (currTrans.includes(transaction._id)) {
        const sender = await UserData.findOne({ _id: transaction.sender });
        const recipient = await UserData.findOne({ _id: transaction.recipient });

        const senderBankData = await BankData.findOne({ _id: sender.bankData });
        const recipientBankData = await BankData.findOne({ _id: recipient.bankData });

        const transactionData = {
          transid: transaction._id,
          senderName: senderBankData.name,
          senderAccNo: senderBankData.accNo,
          recipientName: recipientBankData.name,
          recipientAccNo: recipientBankData.accNo,
          amount: transaction.amount,
          timestamp: transaction.timestamp,
          bal: transaction.bal
        };

        transactionDataArray.push(transactionData);
      }
    }

    res.status(200).json(transactionDataArray);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch transaction data' });
  }
};

module.exports = getRegUsers;
