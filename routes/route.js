const express = require('express');
//this file is for routes
const router = express.Router();
const signUpVerify = require('../controllers/signUpVerify');
const loginVerify = require('../controllers/loginVerify')
const register = require('../controllers/register');
const bankusers = require('../controllers/getBankData');
const addBankUser = require('../controllers/addBankUser');
const updateCurrentUser = require('../controllers/updateCurrentUser');
const trans = require('../controllers/addTransaction');
const gettrans = require('../controllers/getAllTransactions');
const gettransdata = require('../controllers/getTransactions');

const reg = require("../controllers/getRegUsers");
const currGet = require("../controllers/getCurrentUser");
const { getUserDataByID } = require('../controllers/userController');


router.post('/signupverify', signUpVerify);
router.post('/register', register);
router.post('/login', loginVerify);
router.get('/bankData', bankusers);
router.post('/bankData', addBankUser);
router.post('/updateCurrentUser', updateCurrentUser);

router.get('/registeredusers', reg);
router.get('/CurrentUser', currGet);
router.post('/transaction', trans);
router.get('/transaction', gettrans);

router.get('/user/:id', getUserDataByID);

router.get('/transactionData', gettransdata);
module.exports = router;

