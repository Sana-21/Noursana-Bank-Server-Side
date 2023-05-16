const mongoose = require('mongoose');
const moment = require('moment');

const CurrentUserSchema = new mongoose.Schema({
  currentUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BankData',
    default: null,
  },
  updatedAt: {
    type: String,
    default: moment().format('HH:mm, DD/MM/YY'),
  },
});

const CurrentUser = mongoose.model('CurrentUser', CurrentUserSchema);

module.exports = CurrentUser;
