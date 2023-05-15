const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cnic: {
      type: Number,
      required: true,
      unique: true,
    },
    cardNo: {
      type: Number,
      required: true,
      unique: true,
    },
    balance: {
      type: Number,
      required: true,
    },
    accNo: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    collection: "Bank-database",
  }
);
const BankData = mongoose.model('BankData', BankSchema);
module.exports = BankData;
