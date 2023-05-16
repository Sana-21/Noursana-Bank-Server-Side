const express = require('express');
const router = express.Router();
const CurrentUser = require('../models/CurrentUser');
const moment = require('moment');

// PUT endpoint to update currentUser
router.put('/currentUser/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { currentUser } = req.body;

    const updatedCurrentUser = await CurrentUser.findByIdAndUpdate(
      id,
      { currentUser, updatedAt: moment().format('HH:mm, DD/MM/YY') },
      { new: true }
    ).populate('currentUser');

    if (!updatedCurrentUser) {
      return res.status(404).json({ status: 'Error', message: 'CurrentUser not found' });
    }

    res.json({ status: 'Success', currentUser: updatedCurrentUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error', message: 'Failed to update currentUser' });
  }
});

module.exports = router;
