const mongoose = require('mongoose');

const beneficiarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  accountNumber: {
    type: Number,
    required: true
  }

});

const BeneficiaryData = mongoose.model('beneficiaryData', beneficiarySchema);
module.exports = BeneficiaryData;