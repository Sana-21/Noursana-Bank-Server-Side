const UserData = require('../models/UserDetails');
const BeneficiaryData = require('../models/Beneficiary');
const deleteBeneficiary = async (req, res) => {
    const { beneficiaryId } = req.params;
  
    try {
      const currentUser = await UserData.findById(req.user.id);
  
      // Check if the beneficiary exists in the user's beneficiaries array
      const beneficiaryIndex = currentUser.beneficiaries.findIndex(
        (beneficiary) => beneficiary.toString() === beneficiaryId
      );
  
      if (beneficiaryIndex === -1) {
        return res.status(404).json({ message: 'Beneficiary not found for the user.' });
      } else {
        // Remove the beneficiary from the user's beneficiaries array
        currentUser.beneficiaries.splice(beneficiaryIndex, 1);
  
        // Save the updated user document
        await currentUser.save();
  
        // Delete the beneficiary document from BeneficiaryData collection
        await BeneficiaryData.findByIdAndDelete(beneficiaryId);
  
        return res.status(200).json({ message: 'Beneficiary deleted successfully.' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  module.exports = deleteBeneficiary;