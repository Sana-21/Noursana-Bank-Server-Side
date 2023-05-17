const BankData = require('../models/BankData');
const CurrentUser = require('../models/CurrentUser');
const BeneficiaryData = require('../models/Beneficiary');
const UserData = require('../models/UserDetails');

const addBeneficiary = async (req, res) => {
  const { senderAccountNumber, beneficiaryName, beneficiaryAccountNumber } = req.body;

  try {
    const bankData = await BankData.findOne({ accNo: beneficiaryAccountNumber });
    if (!bankData) {
      return res.status(404).json({ message: 'Bank data not found.' });
    }

    const senderbankData = await BankData.findOne({ accNo: senderAccountNumber });
    const user = await UserData.findOne({ bankData: senderbankData._id });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    console.log(beneficiaryName);
    const beneficiary = new BeneficiaryData({
      name: beneficiaryName, // Make sure the correct property name is used here
      accountNumber: beneficiaryAccountNumber
    });

    console.log("beneficiary", beneficiary);
    console.log("saving");
    await beneficiary.save();
    console.log("saved");

    user.beneficiaries.push(beneficiary);
    await user.save();

    return res.status(200).json({ message: 'Beneficiary added successfully.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = addBeneficiary;