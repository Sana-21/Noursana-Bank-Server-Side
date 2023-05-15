const bankData = require('../models/BankData');
const userData = require('../models/UserDetails')
const loginVerify = async (req, res) => {
const { loginId, password } = req.body;
try {
    const user = await userData.findOne({ loginId, password});
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

module.exports = loginVerify;