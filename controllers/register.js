const express = require('express');
const app = express();
const User = require('../models/UserDetails');
app.use(express.json()); // enable parsing of JSON request bodies

app.post('/register', async (req, res) => {
  const { loginId, email, password } = req.body;
  try {
    await User.create({
      loginId,
      email, 
      password,
    });
    res.send({ status: 'OK' });
  } catch (error) {
    res.send({ status: 'Error' });
  }
});

module.exports = app;