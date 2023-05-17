const UserData = require('../models/UserDetails');
const BankData = require('../models/BankData');

module.exports = {
    getUserDataByID: async (req, res) => {
        try {
          const userId = req.params.id;
          const userData = await UserData.findOne({ _id: userId });
          const bankData = await BankData.findOne({ _id: userData.bankData });
          res.status(200).json({ userData: userData, bankData: bankData });
        } catch (err) {
          res.status(404).send(err);
        }
      },
};
