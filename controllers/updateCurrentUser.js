const express = require('express');
const app = express();
const User = require('../models/UserDetails');
const CurrentUser = require('../models/CurrentUser')
app.use(express.json()); // enable parsing of JSON request bodies

const updateCurrentUser = async (req, res) => {
  const { loginId } = req.body;
  try {
    const userData = await User.findOne({ loginId });

    if (!userData) {
      return res.send({ status: 'Data not found' });
    }

    // Find the previous current user entry
    const previousUser = await CurrentUser.findOne();

    // Delete the previous user entry
    if (previousUser) {
      await previousUser.deleteOne();
    }

    // Create new current user entry with updatedAt from previous user
    await CurrentUser.create({
      currentUser: userData._id,
      last: previousUser ? previousUser.updatedAt : null,
    });

    res.send({ status: 'OK' });
  } catch (error) {
    console.error(error);
    res.send({ status: 'Error' });
  }
}

module.exports = updateCurrentUser;

