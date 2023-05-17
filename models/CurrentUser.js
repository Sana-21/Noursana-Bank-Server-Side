const mongoose = require('mongoose');

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
});

const CurrentUser = mongoose.model('CurrentUser', CurrentUserSchema);

module.exports = CurrentUser;
