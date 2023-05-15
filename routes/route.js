const express = require('express');
//this file is for routes
const router = express.Router();
const signUpVerify = require('../controllers/signUpVerify');
const registerUser = require('../controllers/register')

router.post('/signupverify', signUpVerify);
router.post('/register', registerUser);
module.exports = router;

