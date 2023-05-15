
// Verify signup data from MongoDB database
const bankData = require('../models/BankData');

const signUpVerify = async (req, res) => {
const { name, cnic, cardNo } = req.body;
try {
    const user = await bankData.findOne({ name, cnic, cardNo });
    if (!user) {
    console.log(user);
    res.sendStatus(401);
    } else {
    console.log(user);
    res.sendStatus(200);
    }
} catch (err) {
    console.error(err);
    res.sendStatus(500);
}
};

module.exports = signUpVerify;

