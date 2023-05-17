const mongoose = require('mongoose');
const moment = require('moment');

const CurrentUserSchema = new mongoose.Schema({
  currentUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserDetails',
    default: null,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  last:{
    type: Date,
    default: null,
  }
});

const CurrentUser = mongoose.model('CurrentUser', CurrentUserSchema);

module.exports = CurrentUser;
