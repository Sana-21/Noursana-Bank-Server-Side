const User = require('../models/UserDetails')
module.exports= {
    addbeneficiary: async(req, res)=> {

    const { senderAccNo, recipientAccNo} = req.body;

    try {
        const sender = await User.findOne({ 'bankData.accNo': senderAccNo });
        const recipient = await User.findOne({ 'bankData.accNo': recipientAccNo });

        if (!sender || !recipient) {
        return res.send({ status: 'Account does not exist' });
        }

        const sendBeneficiary = new BeneficiaryData({
        name: recipient.name,
        accountNumber: recipient.accNo
        });

   
        await sendBeneficiary.save();
        sender.beneficiaries.push(recipientBeneficiary);

        await sender.save();
        res.send({ status: 'Beneficiary added successfully' });
   } catch (error) {
    res.status(500).send({ status: 'Error occurred' });
  }
   
 }
}