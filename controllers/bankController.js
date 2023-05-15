const mongoose = require('mongoose');
const Connection = require('../database/connection')
const BankSchema = require('../models/BankData')
async function insertBankData() {
  await Connection();
    //inserting data for verification for signup
  const Bank = mongoose.model('BankData', BankSchema);

  const data = [
    { name: 'Sana', cnic: 123456, cardNo: 123456, balance: 5000, accNo: 123456 },
    { name: 'Noureen', cnic: 000000, cardNo: 000000, balance: 7500, accNo: 789101 },
    { name: 'John', cnic: 111111, cardNo: 111111, balance: 7500, accNo: 111111 },
  ];

  try {
    const result = await Bank.insertMany(data);
    console.log(`${result.length} documents inserted into the Bank collection`);
  } catch (err) {
    console.error(err);
  }

  await mongoose.disconnect();
}

insertBankData();
 module.exports = insertBankData;
  