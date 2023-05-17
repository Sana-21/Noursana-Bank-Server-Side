const express = require('express');
const app = express();
const User = require('../models/UserDetails');
const CurrentUser = require('../models/CurrentUser')
app.use(express.json()); // enable parsing of JSON request bodies

const updateCurrentUser = async (req, res) => {
  const { loginId} = req.body;
  try {
    const userData = await User.findOne({ loginId });

    if (!userData) {
      return res.send({ status: 'User Data not found' });
    }

    await CurrentUser.create({
      userData: userData._id,
    });

    res.send({ status: 'OK' });
  } catch (error) {
    res.send({ status: 'Error' });
  }
}

module.exports = updateCurrentUser;

