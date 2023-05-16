const express = require('express');
//this file is for routes
const router = express.Router();
const signUpVerify = require('../controllers/signUpVerify');
const loginVerify = require('../controllers/loginVerify')
const register = require('../controllers/register');
const bankusers = require('../controllers/getBankData');
const addBankUser = require('../controllers/addBankUser');
const updateCurrentUser = require('../controllers/updateCurrentUser')

router.post('/signupverify', signUpVerify);
router.post('/register', register);
router.post('/login', loginVerify);
router.get('/bankData', bankusers);
router.post('/bankData', addBankUser);
router.post('/updateCurrentUser', updateCurrentUser)
module.exports = router;

