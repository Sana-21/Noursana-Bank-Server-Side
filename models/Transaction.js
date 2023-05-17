const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    bal:{
      type: Number,
      required: true,
    }
  },
  {
    collection: "TransData",
  }
  );

const TransactionData = mongoose.model('TransData', transactionSchema);
module.exports = TransactionData;
