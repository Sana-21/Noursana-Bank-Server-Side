const User = require('../models/UserDetails');
const BankData = require('../models/BankData');
const Transaction = require('../models/Transaction');

const addTransaction = async (req, res) => {
  const { senderAccNo, recipientAccNo, amount } = req.body;

  try {
    const sender = await BankData.findOne({ accNo: senderAccNo });
    const recipient = await BankData.findOne({ accNo: recipientAccNo });

    if (!sender || !recipient) {
      return res.send({ status: 'Account does not exist' });
    }

    const senderUser = await User.findOne({ bankData: sender._id });
    const recipientUser = await User.findOne({ bankData: recipient._id });

    if (!senderUser || !recipientUser) {
      return res.send({ status: 'User not found' });
    }

    // Update the sender's balance
    sender.balance -= amount;

    // Update the recipient's balance
    recipient.balance += amount;

    const senderTransaction = new Transaction({
      sender: senderUser._id,
      recipient: recipientUser._id,
      amount: -amount, // negative amount to represent money leaving the account
      bal: sender.balance,
    });

    const recipientTransaction = new Transaction({
      sender: senderUser._id,
      recipient: recipientUser._id,
      amount,
      bal: recipient.balance,
    });

    await senderTransaction.save();
    await recipientTransaction.save();

    senderUser.transactions.push(senderTransaction);
    recipientUser.transactions.push(recipientTransaction);

    await senderUser.save();
    await recipientUser.save();

    await sender.save();
    await recipient.save();

    res.send({ status: 'Transaction added successfully' });
  } catch (error) {
    res.status(500).send({ status: 'Error occurred' });
  }
};

module.exports = addTransaction;
