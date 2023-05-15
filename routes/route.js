const express = require('express');
//this file is for routes
const router = express.Router();
const signUpVerify = require('../controllers/signUpVerify');
const loginVerify = require('../controllers/loginVerify')
const register = require('../controllers/register');

router.post('/signupverify', signUpVerify);
router.post('/register', register);
router.post('/login', loginVerify);
module.exports = router;

