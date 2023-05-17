  const User = require('../models/UserDetails')
  const addTransaction = async (req, res) => {
  const { senderAccNo, recipientAccNo, amount } = req.body;

  try {
    const sender = await User.findOne({ accNo: senderAccNo });
    const recipient = await User.findOne({ accNo: recipientAccNo });

    if (!sender || !recipient) {
      return res.send({ status: 'Account does not exist' });
    }

    const senderTransaction = new Transaction({
      sender: sender._id,
      recipient: recipient._id,
      amount
    });

    const recipientTransaction = new Transaction({
      sender: sender._id,
      recipient: recipient._id,
      amount: -amount // negative amount to represent money received
    });

    // Update the sender's balance
    sender.balance -= amount;

    // Update the recipient's balance
    recipient.balance += amount;

    await senderTransaction.save();
    await recipientTransaction.save();

    sender.transactions.push(senderTransaction);
    recipient.transactions.push(recipientTransaction);
  
   
    await sender.save();
    await recipient.save();

    res.send({ status: 'Transaction added successfully' });
  } catch (error) {
    res.status(500).send({ status: 'Error occurred' });
  }
}

module.exports = addTransaction;